const datos = {
    nombre: '',
    email: '',
    mensaje: '',
    telefono:''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos);

    // Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' || telefono === '') {
        console.log('Al menos un campo esta vacio');
        mostrarAlerta('Todos los campos son obligatorios','true');
        return; // Detiene la ejecución de esta función
    }

    

    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}



function mostrarAlerta(mensaje ,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}



// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const telefono = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);

