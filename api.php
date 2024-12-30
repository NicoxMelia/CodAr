<?php
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// SQL query to fetch data
$sql = "SELECT name, url FROM your_table";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $data[] = ["name" => $row["name"], "url" => $row["url"]];
    }
} else {
    $data = ["message" => "No records found"];
}

echo json_encode($data);

$conn->close();
?>
