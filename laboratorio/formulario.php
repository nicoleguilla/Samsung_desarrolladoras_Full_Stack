
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "laboratorio";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$email = $_POST["email"];
$login = $_POST["login"];
$password = $_POST["password"];

// Verificar si el email ya existe en la base de datos
$sql = "SELECT * FROM usuario WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "El correo electrónico ya está registrado.";
} else {
    // Insertar los datos en la tabla usuarios
    $sql = "INSERT INTO usuario (nombre, apellido1, apellido2, email, login, password) VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password')";

    if ($conn->query($sql) === true) {
        echo "<!DOCTYPE html>
        <html>
        <head>
          <title>Registro exitoso</title>
          <link rel='stylesheet' type='text/css' href='estilos.css'>
        </head>
        <body>
          <div class='container'>
            <h2>Registro exitoso</h2>
            <p>Tus datos se han guardado correctamente:</p>
            <ul>
              <li><strong>Nombre:</strong> $nombre</li>
              <li><strong>Apellido:</strong> $apellido1</li>
              <li><strong>Apellido:</strong> $apellido2</li>
              <li><strong>Email:</strong> $email</li>
              <li><strong>Email:</strong> $login</li>
            </ul>
            <a href='consulta.php'>Consulta</a>
          </div>
        </body>
        </html>";
    } else {
        echo "Error al registrar los datos: " . $conn->error;
    }
}

$conn->close();
?>