const form = document.querySelector('.formulario');
const messageContainer = document.querySelector('.message-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!isValidForm()) {
    return false;
  }

  form.submit();
  showMessage('La inscripción fue enviada con éxito!', 'success');
});

function isValidForm() {
  const nSocioInput = document.querySelector('input[name="n_socio"]');
  const nSocioValue = nSocioInput.value.trim();

  if (nSocioValue === '') {
    showMessage('Por favor, ingrese su número de socio', 'error');
    nSocioInput.focus();
    return false;
  }

  const nombreInput = document.querySelector('input[name="apellido_nombre"]');
  const nombreValue = nombreInput.value.trim();

  if (nombreValue === '') {
    showMessage('Por favor, ingrese su apellido y nombre', 'error');
    nombreInput.focus();
    return false;
  }

  const direccionInput = document.querySelector('input[name="direccion"]');
  const direccionValue = direccionInput.value.trim();

  if (direccionValue === '') {
    showMessage('Por favor, ingrese su dirección', 'error');
    direccionInput.focus();
    return false;
  }

  const localidadInput = document.querySelector('input[name="localidad"]');
  const localidadValue = localidadInput.value.trim();

  if (localidadValue === '') {
    showMessage('Por favor, ingrese su localidad', 'error');
    localidadInput.focus();
    return false;
  }

  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(emailValue)) {
    alert('Por favor, ingrese un correo electrónico válido');
    emailInput.focus();
    return false;
  }

  const telefonoInput = document.querySelector('input[name="telefono"]');
  const telefonoValue = telefonoInput.value.trim();

  const telefonoRegex = /^+?([0-9]{2})?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (!telefonoRegex.test(telefonoValue)) {
    alert('Por favor, ingrese un número de teléfono válido. El formato debería ser +999999999999, 999-999-9999 o 999.999.9999');
    telefonoInput.focus();
    return false;
  }
  return true;
}

function showMessage(message, type) {
  messageContainer.textContent = message;
  messageContainer.className = type;
}