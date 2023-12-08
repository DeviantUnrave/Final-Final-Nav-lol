<?php
// Include the database connection file
include 'dbconn.php';

// Function to add a new employee account
function addEmployeeAccount($employee_id, $username, $password, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    // Insert a new record into the Employee Account table
    $sql = "INSERT INTO `Employee Account` (employee_id, username, password)
            VALUES ('$employee_id', '$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        return true; // Indicate successful addition
    } else {
        return false; // Indicate error
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $employee_id = $_POST['employee_id'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Add a new employee account
    $addResult = addEmployeeAccount($employee_id, $username, $password, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($addResult) {
        echo json_encode(['result' => 'Employee account added successfully.']);
    } else {
        echo json_encode(['result' => 'Error adding employee account.']);
    }
}

// Close the database connection
$conn->close();
?>