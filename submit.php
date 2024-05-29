<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reservations";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response = array("status" => "", "message" => "");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $table_size = $_POST['table_size'];
    $table_number = $_POST['table_number'];
    $hour = $_POST['hour'];
    $date = $_POST['date'];

    // Check if any field is empty
    if (empty($name) || empty($surname) || empty($email) || empty($phone) || empty($table_size) || empty($table_number) || empty($hour) || empty($date)) {
        $response["status"] = "error";
        $response["message"] = "Wszystkie pola muszą być wypełnione.";
    } else {
        // Check if the table is already reserved
        $sql_check = "SELECT * FROM reservations WHERE table_number='$table_number' AND date='$date' AND hour='$hour'";
        $result = $conn->query($sql_check);

        if ($result->num_rows > 0) {
            $response["status"] = "error";
            $response["message"] = "Stolik jest już zarezerwowany na wybraną godzinę i datę.";
        } else {
            // Insert the reservation into the database
            $sql = "INSERT INTO reservations (name, surname, email, phone, table_size, table_number, hour, date)
                    VALUES ('$name', '$surname', '$email', '$phone', '$table_size', '$table_number', '$hour', '$date')";

            if ($conn->query($sql) === TRUE) {
                $response["status"] = "success";
                $response["message"] = "Rezerwacja została pomyślnie zapisana.";
            } else {
                $response["status"] = "error";
                $response["message"] = "Błąd: " . $conn->error;
            }
        }
    }
}

// Zamknij połączenie z bazą danych
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
