<?php
// Include the database connection file
include 'dbconn.php';

// Function to get username and password by employee_id
function getCredentialsByEmployeeID($employee_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    // Query to get username and password
    $sql = "SELECT username, password FROM employee_account WHERE employee_id = '$employee_id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Employee exists, fetch the username and password
        $row = $result->fetch_assoc();
        return ['username' => $row['username'], 'password' => $row['password']];
    } else {
        // Employee not found
        return null;
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $employee_id = $_POST['employee_id'];

    // Get username and password
    $credentials = getCredentialsByEmployeeID($employee_id, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($credentials !== null) {
        echo json_encode(['username' => $credentials['username'], 'password' => $credentials['password']]);
    } else {
        echo json_encode(['error' => 'Employee not found.']);
    }
}

// Close the database connection
$conn->close();
?>
