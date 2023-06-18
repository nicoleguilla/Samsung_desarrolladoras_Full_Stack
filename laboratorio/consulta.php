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

// Realizar la consulta a la base de datos
$sql = "SELECT * FROM usuario";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Mostrar la lista de usuarios
    echo "<!DOCTYPE html>
    <html>
    <head>
      <title>Consulta de usuarios</title>
      <link rel='stylesheet' type='text/css' href='estilos.css'>
    </head>
    <body>
      <div class='container'>
        <h2>Lista de usuarios registrados</h2>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
            <th>Login</th>
          </tr>";
    while ($row = $result->fetch_assoc()) {
        $nombre = $row["nombre"];
        $apellido1 = $row["apellido1"];
        $apellido2 = $row["apellido2"];
        $email = $row["email"];
        $login = $row["login"];
        
        echo "<tr>
            <td>$nombre</td>
            <td>$apellido1</td>
            <td>$apellido2</td>
            <td>$email</td>
            <td>$login</td>
          </tr>";
    }
    echo "</table>
      </div>
    </body>
    </html>";
} else {
    echo "No se encontraron usuarios registrados.";
}

$conn->close();
?>