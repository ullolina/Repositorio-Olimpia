document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var form = document.getElementById('formulario');
  
    // Obtener los valores ingresados por el usuario
    var nombre = form.elements['nombre'].value;
    var email = form.elements['email'].value;
    var mensaje = form.elements['mensaje'].value;
  
    // Simular el envío del correo electrónico (sin autenticación)
    Email.send({
      SecureToken: 'fake_token',
      To: email,
      From: 'olimpia23@gmail.com',
      Subject: 'Prueba de envío de correo',
      Body: 'Hola ' + nombre + ',<br><br>Este es un correo de prueba enviado desde el formulario.<br><br>Mensaje: ' + mensaje
    }).then(
      function (message) {
        alert('Correo enviado correctamente');
        form.reset();
      },
      function (error) {
        alert('Error al enviar el correo');
      }
    );
  });
  