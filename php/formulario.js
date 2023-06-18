// Obtener el formulario
var form = document.querySelector('form');

// Agregar un evento de escucha para el evento de envío del formulario
form.addEventListener('submit', function(event) {
  // Detener el envío del formulario por defecto
  event.preventDefault();

  // Validar los campos del formulario antes de enviarlo
  var nombreInput = document.getElementById('nombre');
  var apellidoInput = document.getElementById('apellido');
  var emailInput = document.getElementById('email');

  // Verificar si los campos están vacíos
  if (nombreInput.value.trim() === '' || apellidoInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('Por favor, complete todos los campos');
    return; // Detener la ejecución del código
  }

  // Si todos los campos están completos, enviar el formulario
  form.submit();
});