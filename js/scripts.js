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

    const { nombre, email, mensaje ,telefono} = datos;

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
const telefono = document.querySelector('#telefono');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);





window.onload = function() {
    var loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(function() {
      loaderWrapper.style.display = 'none'; // oculta el loader después de 5 segundos
    }, 3000);
  };


  //Show up information about pages

  const producto = document.querySelector(".producto");

  const div = document.querySelector(".card-stenght");
  const remove = document.querySelector(".remove");
  producto.onclick = function() {
    div.classList.toggle("active");
  };
  remove.addEventListener("click", function() {
    producto.click();
 })





/* 

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
    telefono: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const { nombre, email, mensaje, telefono } = datos;

    if (nombre === '' || email === '' || mensaje === '' || telefono === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }

    // Enviar datos al servidor
    enviarDatosAlServidor(datos);
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function enviarDatosAlServidor(datos) {
    fetch('http://tu-servidor.com/enviar-correo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
        .then(response => response.json())
        .then(data => {
            mostrarAlerta(data.mensaje, !data.enviado);
        })
        .catch((error) => {
            console.error('Error al enviar datos:', error);
            mostrarAlerta('Hubo un error al enviar los datos', true);
        });
}





const express = require('express');
   const nodemailer = require('nodemailer');
   const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
    const datos = req.body;

    // Configurar el transporte del correo
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu-correo@gmail.com',
            pass: 'tu-contraseña',
        },
    });

    // Configurar el contenido del correo
    const mailOptions = {
        from: 'tu-correo@gmail.com',
        to: 'destinatario@gmail.com',
        subject: 'Nuevo mensaje del formulario de contacto',
        html: `
            <p>Nombre: ${datos.nombre}</p>
            <p>Email: ${datos.email}</p>
            <p>Teléfono: ${datos.telefono}</p>
            <p>Mensaje: ${datos.mensaje}</p>
        `,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.json({ enviado: false, mensaje: 'Hubo un error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.json({ enviado: true, mensaje: 'Mensaje enviado correctamente' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
}); */