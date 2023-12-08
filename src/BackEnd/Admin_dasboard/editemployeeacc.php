<?php
// Include the database connection file
include 'dbconn.php';

// Function to edit username and password in Employee Account
function editEmployeeAccount($employee_id, $username, $password, $conn) {
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    // Update username and password in the Employee Account table
    $sql = "UPDATE `Employee Account`
            SET username = '$username', password = '$password'
            WHERE employee_id = '$employee_id'";

    if ($conn->query($sql) === TRUE) {
        return true; // Indicate successful edit
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

    // Edit the Employee Account
    $editResult = editEmployeeAccount($employee_id, $username, $password, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($editResult) {
        echo json_encode(['result' => 'Edit successful.']);
    } else {
        echo json_encode(['result' => 'Error editing Employee Account.']);
    }
}

// Close the database connection
$conn->close();
?>