<?php
// Include the database connection file
include 'dbconn.php';

// Function to delete an employee
function deleteEmployee($employee_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    // Delete employee record from the Employee table
    $sql = "DELETE FROM Employee WHERE employee_id = '$employee_id'";

    if ($conn->query($sql) === TRUE) {
        // Employee deleted successfully
        return true;
    } else {
        // Error deleting employee
        return false;
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $employee_id = $_POST['employee_id'];

    // Delete the employee
    $deleteResult = deleteEmployee($employee_id, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($deleteResult) {
        echo json_encode(['result' => 'Employee deleted successfully.']);
    } else {
        echo json_encode(['result' => 'Error deleting employee.']);
    }
}

// Close the database connection
$conn->close();
?>
