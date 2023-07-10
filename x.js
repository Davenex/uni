



/* funciones para validar input*/
// Validar código
let codigo = document.getElementById("codigo");
function validarCodigo() {
    let span = document.getElementById("validCodigo");
    //const regex = /^[A-Za-z]+$/;
    if (!codigo.value) {
        //alert("Por favor, introduce solo caracteres de texto."); 
        span.style = "display:block";
        span.innerText = "Por favor, introduce solo caracteres de texto.";
        span.className = "text-danger";
        codigo.className = "form-control border-input-error";
        return false;
    }
    else {
        span.innerText = "";
        span.style = "display:none;";
        codigo.className = "form-control border-input-ok";
        return true;
    }
}
codigo.addEventListener('input', validarCodigo);


// validar nombre
let nombre = document.getElementById("nombre");
function validarNombre() {
    let span = document.getElementById("validNombre");
    console.log(nombre.value)
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(nombre.value)) {
        //alert("Por favor, introduce solo caracteres de texto."); 
        span.style = "display:block";
        span.innerText = "Por favor, introduce solo caracteres de texto.";
        span.className = "text-danger";
        nombre.className = "form-control border-input-error";
        return false;
    }
    else {
        span.innerText = "";
        span.style = "display:none;";
        nombre.className = "form-control border-input-ok";
        return true;
    }
    
}
nombre.addEventListener('input', validarNombre);


// validar UserName

let userName = document.getElementById("userName");
function validarUsername() {
    let span = document.getElementById("validUsername");
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(userName.value)) {
        //alert("Por favor, introduce un correo electrónico válido.");
        span.style = "display:block";
        span.innerText = "Por favor, introduce un correo electrónico válido";
        span.className = "text-danger";

        userName.className = "form-control border-input-error";
        return false;
    }
    else {
        span.style = "display:none";
        span.innerText = "";
        userName.className = "form-control border-input-ok";
        return true;
    }
}
userName.addEventListener("input", validarUsername);


// Validar correo

let correo = document.getElementById("correo");
function validarCorreo() {
    let validCorreo = document.getElementById("validCorreo");
    //var regex = /^[A-Za-z]+$/;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(correo.value)) {
        //alert("Por favor, introduce un correo electrónico válido.");
        validCorreo.style = "display:block";
        validCorreo.innerText = "Por favor, introduce un correo electrónico válido";
        validCorreo.className = "text-danger";

        correo.className = "form-control border-input-error";
        return false;
    }
    else {
        validCorreo.style = "display:none";
        validCorreo.innerText = "";
        correo.className = "form-control border-input-ok";
        return true;
    }
}
correo.addEventListener("input", validarCorreo);


/*tarea: validar el textarea. buscar o elegir una expresion regular*/
let descripcion = document.getElementById("descripcion");

/************************** *************************************************/
let array = []; //es un array o variable global
function leerForms() {

    let valid0 = validarCodigo();
    let validNombre = validarNombre();
    let valid1 = validarCorreo();
    let validUsername = validarUsername();

    if (valid0 && valid1 && validNombre && validUsername == true) {
        // crear un objeto en javascript
        let objeto = {
            "codigo": codigo.value,
            "nombre": nombre.value,
            "userName": userName.value,
            "correo": correo.value,
            "fecha": Date(),
            "estado": false

        };
        array.push(objeto); //agregar el objeto al array
        console.table(array); // mostrar la info del array en la console
        
        actualizarTablaHtml();
        // console.log(objeto);
    }
    //console.log(objeto);
    //validarTexto();
    //validarCorreo();
}


function myApi(){
    let datosBody = document.getElementById('datosBody');
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrarData(data) )
        .catch( error => console.log(error) )

    const mostrarData = (data) => {
        console.log(data)
        
        datosBody.innerHTML = "";
       // data.reverse()
        for (let i = 0; i < data.length; i++) {     
            //crear la fila
            let fila = document.createElement('tr');
            //crear la columna codigo
            let columnaCodigo = document.createElement('td');
            columnaCodigo.textContent = data[i].id; //pasar el dat
            fila.appendChild(columnaCodigo); // add columna a la fila
            
           
            fila.appendChild(columnaCodigo); // add columna a la fila 

            //crear la columna codigo
            let columnaNombre = document.createElement('td');
            columnaNombre.textContent = data[i].name; //pasar el dato
            fila.appendChild(columnaNombre); // add columna a la fila 

              //crear la columna codigo
            let columnaUser = document.createElement('td');
            columnaUser.textContent = data[i].username; //pasar el dato
            fila.appendChild(columnaUser); // add columna a la fila 

                //crear la columna codigo
            let columnaCorreo = document.createElement('td');
            columnaCorreo.textContent = data[i].email; //pasar el dato
            fila.appendChild(columnaCorreo); // add columna a la fila 


            let columnaOPciones = document.createElement('td');

            //crear boton eliminar
            let btneliminar = document.createElement('button');
            btneliminar.textContent = "Eliminar";
            btneliminar.className = "btn btn-danger me-2";
            btneliminar.addEventListener('click', function(e) {
                //eliminar(i);
                e.target.parentNode.parentNode.remove()
            });
            function eliminar(i) {
                array.splice(i, 1);
                actualizarTablaHtml();
            }
            columnaOPciones.appendChild(btneliminar);
            // crear otro boton
            /*let btnMarcar = document.createElement('button');
            btnMarcar.textContent = "Marcar";
            btnMarcar.className = "btn btn-primary";
            btnMarcar.addEventListener('click', function () {
                cambiaEstado(i);
            });*/
            //columnaOPciones.appendChild(btneliminar);
            //columnaOPciones.appendChild(btnMarcar);
    
            fila.appendChild(columnaOPciones);
    
    /*
            if(array[i].estado){
                fila.className="marcar-ok";
            }
*/

            datosBody.appendChild(fila);
        }
       // document.getElementById('datosBody').innerHTML = body
        //console.log(body)
    }
}
myApi()
let fila;
function actualizarTablaHtml() {
   
    
    //datosBody.innerHTML = "";
    let datosBody = document.getElementById('datosBody');
   /* if (!fila) {
        fila = document.createElement('tr');
       // fila.insertAdjacentHTML('afterend', '<br>');
    }else {
        // Eliminar los elementos anteriores de la fila
     
       // 
       
    }*/
        for (let i = 0; i < array.length; i++) {
         
            //crear la fila
            fila = document.createElement('tr');
            //crear la columna codigo
            let columnaCodigo = document.createElement('td');
            columnaCodigo.textContent = array[i].codigo; //pasar el dato
            fila.appendChild(columnaCodigo); // add columna a la fila
            
            //crear la columna nombre
            let columnaNombre = document.createElement('td');
            columnaNombre.textContent = array[i].nombre; //pasar el dato
            fila.appendChild(columnaNombre); // add columna a la fila
    
            //crear la columna correo
            let columnaUsername = document.createElement('td');
            columnaUsername.textContent = array[i].userName; //pasar el dato
            fila.appendChild(columnaUsername); // add columna a la fila
    
            //crear la columna descripcion
            let columnaCorreo = document.createElement('td');
            columnaCorreo.textContent = array[i].correo; //pasar el dato
            fila.appendChild(columnaCorreo); // add columna a la fila
    
            let columnaOPciones = document.createElement('td');
            //crear boton eliminar
            let btneliminar = document.createElement('button');
            btneliminar.textContent = "Eliminar";
            btneliminar.className = "btn btn-danger me-2";
            btneliminar.addEventListener('click',  (e)=> {
                //eliminar(i);
                    console.log(e.target.parentNode.parentNode.remove())
            });
            columnaOPciones.appendChild(btneliminar);
            // crear otro boton
           /* let btnMarcar = document.createElement('button');
            btnMarcar.textContent = "Marcar";
            btnMarcar.className = "btn btn-primary";
            btnMarcar.addEventListener('click', function () {
                cambiaEstado(i);
            });*/
            //columnaOPciones.appendChild(btneliminar);
           // columnaOPciones.appendChild(btnMarcar);
    
            fila.appendChild(columnaOPciones);
    
    
            if(array[i].estado){
                fila.className="marcar-ok";
            }
            //add fila al tbody de la tabla html
            if (!fila) {
                fila = document.createElement('tr');
              
            }else{
                
                datosBody.appendChild(fila);
                console.log(datosBody)
                datosBody.removeChild(fila.firstChild());
            }
         
           
      }
      
}
/*
function eliminar(i) {
    array.splice(i, 1);
    actualizarTablaHtml();
}
*/

function cambiaEstado(i){
    array[i].estado=!array[i].estado;
    //array[i].estado= !(false)  not, and, or
    //array[i].estado= true;

    actualizarTablaHtml();
}


//git init
//git status -s    ver seguimiento
// git add nombre archivo  -> para añadirlo a temporales
// git commit -m "mensaje"   hacemos el rpimer commit para guadar la primera copia
// git add .   envía todos los archivos al área temporal de una
// git log --oneline  nos muestra los commits
//git reset --hard (identificador) volvemos a la versión del archivo que queramos

