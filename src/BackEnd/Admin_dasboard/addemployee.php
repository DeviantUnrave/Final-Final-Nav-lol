<?php
// Include the database connection file
include 'dbconn.php';

// Function to add a new employee
function addEmployee($first_name, $middle_name, $last_name, $birthday, $contact, $position_id, $conn) {
    $first_name = mysqli_real_escape_string($conn, $first_name);
    $middle_name = mysqli_real_escape_string($conn, $middle_name);
    $last_name = mysqli_real_escape_string($conn, $last_name);
    $birthday = mysqli_real_escape_string($conn, $birthday);
    $contact = mysqli_real_escape_string($conn, $contact);
    $position_id = mysqli_real_escape_string($conn, $position_id);

    // Insert new employee record into the Employee table
    $sql = "INSERT INTO Employee (first_name, middle_name, last_name, birthday, contact, position_id)
            VALUES ('$first_name', '$middle_name', '$last_name', '$birthday', '$contact', '$position_id')";

    if ($conn->query($sql) === TRUE) {
        return true; // Indicate successful addition
    } else {
        return false; // Indicate error
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $birthday = $_POST['birthday'];
    $contact = $_POST['contact'];
    $position_id = $_POST['position_id'];

    // Add a new employee
    $addResult = addEmployee($first_name, $middle_name, $last_name, $birthday, $contact, $position_id, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($addResult) {
        echo json_encode(['result' => 'Employee added successfully.']);
    } else {
        echo json_encode(['result' => 'Error adding employee.']);
    }
}

// Close the database connection
$conn->close();
?>
