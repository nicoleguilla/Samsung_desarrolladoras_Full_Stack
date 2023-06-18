<?php
// Establecer conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursosql";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];

// Insertar los datos en la base de datos
$sql = "INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";

if ($conn->query($sql) === TRUE) {
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
          <li><strong>Apellido:</strong> $apellido</li>
          <li><strong>Email:</strong> $email</li>
        </ul>
      </div>
    </body>
    </html>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>