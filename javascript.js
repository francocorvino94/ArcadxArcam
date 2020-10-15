
function login (){ 
var saludo= "Bienvenido a TRIsite, Hola "
var cantidadactual= "Total de puntos acumulados: "
localStorage.numeroa=1005
var numeroa=localStorage.getItem(numeroa)
console.log(numeroa);
var nombre= prompt ("Ingrese su nombre: ");

var pin= prompt ("Ingrese el número de miembro de la plataforma: ");
pin=parseInt(pin);

if (nombre!="") {alert(saludo+nombre)
    
}
if ((pin>10)&&(pin<50)) {alert("¡¡Felicidades!!.Usted está entre los miembros a los que se le otorgará un descuento del 30% en cualquiera de nuestros cursos.");
    
}


monto=prompt("Si desea consultar los puntos acumulados para participar en los descuentos especiales en nuestros cursos, vuelva a escribir su número de miembro: ")
monto=parseInt(monto);

var resultado= monto+numeroa;
resultado=parseInt(resultado);

alert(cantidadactual+resultado);
if (monto>1000) { confirm("¡¡Felicidades!!.Sus puntos acumulados le permite obtener un descuento de 2000$ en la compra de cualquiera de nuestros cursos.");
} else if ((monto<1000)||(monto="")){ confirm ("Lo sentimos, los puntos acumulados son insuficientes. Siga participando, lo estaremos esperando.");}









console.log("TRIsites");
console.info(monto+numeroa);
console.warn("Advertencia");
console.error("Esto es un error");

}


function cupos (){ 
    
    var dias= ["9/9/2020", "19/9/2020", "9/10/2020", "19/10/2020", "9/11/2020", "19/11/2020", "9/12/2020"]
    var resto
    
    
    
    
    for( var i=0; i<=6; i++){  if (i==6){
        alert("Durante el mes de Diciembre, no se dictan clases.");
    }
    else{

    resto= i%2;
    if ( i%2===0){ alert(dias[i] + ": Cupos disponibles");}
    
    else if(resto !=0){ alert(dias[i] + ": Cupos no disponibles");

    }
 }
     
}}



//array con objetos en formato JSON
var cursos = [
    {
        nombre : 'Impresión 3D',
        costo : 1500,
        duracion : '30 horas semanales',
        diasSemanales : 3,
        codigo: 1.00,
    },
    {
        nombre : 'Impresión 2D',
        costo : 2500,
        duracion : '30 horas semanales',
        diasSemanales : 4,
        codigo: 1.01,
    },
    {
        nombre : 'Impresión 1D',
        costo : 500,
        duracion : '12 horas semanales',
        diasSemanales : 3,
        codigo: 1.02,
    
    },

]

var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
// div del HTML contenedor de cursos
var cursosDiv = document.querySelector('#cursos');

//ejecuto la funcion para renderizar los objetos en el HTML
mostrarCursos();
//Funcion para renderizar los Cursos desde la pseudo Base de datos
function mostrarCursos(){

    cursos.forEach((curso) => {
        cursosDiv.innerHTML+=`
        <div class="card">
        <img src="https://via.placeholder.com/1600x800" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${curso.nombre}</h5>
          <p class="card-text">Carga Horaria: ${curso.duracion} en ${curso.diasSemanales} días </p>
        </div>
        <button  onclick="agregarCurso(${cursos.indexOf(curso)})" class="btn-add" >Añadir al carrito</button>
        <div class="card-footer">
          <small class="text-muted">Precio: U$s: ${curso.costo} </small>
        </div>
      </div> 
        `
        // console.log(`${cursos.indexOf(curso)}`);
    });
}


// Agregar los objetos a un array cursoElegido y mostrar en cosola

// botonAgregarCursos.addEventListener('click', diagramarCursos);
function agregarCurso(indice){
        cursosElegidos.push(cursos[indice])    
        // console.log(cursoElegido) 

    diagramarCursos()
    sumadordePrecios();
  
}

let cursosElegidos = [];
//seleccionar el div donde será inyectado el HTML

//funcion para inyectar el html 
function diagramarCursos(){
    //vaciar el html antes de inyectar el nuevo HTML
aqui.innerHTML = '';
cursosElegidos.forEach((cursoElegido)=> {
    aqui.innerHTML += `
    <div class="sectionM__sidebar__div__div d-flex align-items-center d-flex  justify-content-around h-100 border-bottom pb-2 pt-3 row">
                <img href="hola" src="${cursoElegido.img}" class="img-fluid col-3">
                <div class="sectionM__sidebar__div__div__texto col-5">
                    <h4 class="sectionM__sidebar__div__div__texto__titulo text-truncate text-center">${cursoElegido.nombre}</h4>
                </div>
                <div class="sectionM__sidebar__div__div__precio col-2">
                    <h4 id="monto" class="align-self-sm-center"> <span>-$</span>${cursoElegido.costo} <span>-</span></h4>
                </div>
                <p class="sectionM__sidebar__div__div__total col-1" name="${carrito.indexOf(cursoElegido)}>Total: $<span id="totalCode"></span></p>
                <button class=" col-1 btn btn-danger botoneta" onclick="borradorProductos(${carrito.indexOf(cursoElegido)})" id="${(cursoElegido.codigo)}">X</button>
            </div>
    `
    
    
    ;
});

}





let total = 0
let $contenedor = document.querySelector('#aqui')


var carritoCompras = $('#carritoMercado').on('click', function(){
    $('.sectionM__sidebar').toggleClass("cerrar")
})

var carritoCompras2 = $('#cerrarSide').on('click', function(){
    $('.sectionM__sidebar').toggleClass("cerrar")
})



function sumarCarrito(index) {
    $('.sectionM__sidebar').addClass("cerrar")
    
    var producto = cursos[index]
    if (carrito.length > 0) {
        var noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.nombre === carrito[i].nombre) {
            carrito[i].cantidad++;
            noExiste = false;
            }
        }
        if (noExiste) {
            producto.cantidad = 1;
            carrito.push(producto);
        }
    } 
    else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    renderCarrito()
    sumadordePrecios()
    localStorage.carrito = JSON.stringify(carrito)
}

function renderCarrito(){
    localStorage.carrito = JSON.stringify(carrito)
    $contenedor.innerHTML = "";
    if(carrito.length>0){
        carrito.forEach(cursoElegido => {
            $contenedor.innerHTML +=`
            <div class="sectionM__sidebar__div__div d-flex align-items-center d-flex  justify-content-around h-100 border-bottom pb-2 pt-3 row">
                        <img href="hola" src="${cursoElegido.img}" class="img-fluid col-3">
                        <div class="sectionM__sidebar__div__div__texto col-5">
                            <h4 class="sectionM__sidebar__div__div__texto__titulo text-truncate text-center">${cursoElegido.nombre}</h4>
                        </div>
                        <div class="sectionM__sidebar__div__div__precio col-2">
                            <h4 id="monto" class="align-self-sm-center"> <span>-$</span>${cursoElegido.costo} <span>-</span></h4>
                        </div>
                        <p class="sectionM__sidebar__div__div__total col-1" name="${carrito.indexOf(cursoElegido)}>Total: $<span id="totalCode"></span></p>
                        <button class=" col-1 btn btn-danger botoneta" onclick="borradorProductos(${carrito.indexOf(cursoElegido)})" id="${(cursoElegido.codigo)}">X</button>
                    </div>
            `
        });
    
    }
}


function inputChange(e) {
    console.log(e)
    if (e.target.value == 0) {
        carrito.splice(e.target.name, 1);
    } else {
        carrito[e.target.name].cantidad = e.target.value;
    }
    localStorage.carrito = JSON.stringify(carrito)
    renderCarrito();
}


function borradorProductos(index){
    console.log(index)
    carrito[index].cantidad = carrito[index].cantidad - 1;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    localStorage.carrito = JSON.stringify(carrito)
    renderCarrito()
    restadorDePrecio()
    
}

function sumadordePrecios(){
    let total = 0
    let precioTotal = document.querySelector('#total') 
    carrito.forEach(comidita => {
         total = total + comidita.costo * comidita.cantidad
            return 
        });
        localStorage.carrito = JSON.stringify(carrito)
        precioTotal.innerHTML = total
    }
    
    function restadorDePrecio(){
      
      // carrito.forEach(noQuiero =>{
        total + sumadordePrecios() - noQuiero.precio
        // })  
        localStorage.carrito = JSON.stringify(carrito) 
 }

var vaciadorProductos = document.querySelector('#vaciarSide')
vaciadorProductos.addEventListener('click', vaciadorDeSide)
function vaciadorDeSide(){
    let precioTotal = document.querySelector('#total')
    
    total = 0
    console.log("vaciadorDeSide -> total", total)
    precioTotal.innerHTML = total
    renderCarrito()
}



renderCarrito()


































