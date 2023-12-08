<?php
// Include the database connection file
include 'dbconn.php';

// Function to edit employee
function editEmployee($employee_id, $first_name, $middle_name, $last_name, $birthday, $contact, $position_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);
    $first_name = mysqli_real_escape_string($conn, $first_name);
    $middle_name = mysqli_real_escape_string($conn, $middle_name);
    $last_name = mysqli_real_escape_string($conn, $last_name);
    $birthday = mysqli_real_escape_string($conn, $birthday);
    $contact = mysqli_real_escape_string($conn, $contact);
    $position_id = mysqli_real_escape_string($conn, $position_id);

    // Update employee record in the Employee table
    $sql = "UPDATE Employee
            SET first_name = '$first_name',
                middle_name = '$middle_name',
                last_name = '$last_name',
                birthday = '$birthday',
                contact = '$contact',
                position_id = '$position_id'
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
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $birthday = $_POST['birthday'];
    $contact = $_POST['contact'];
    $position_id = $_POST['position_id'];

    // Edit the employee
    $editResult = editEmployee($employee_id, $first_name, $middle_name, $last_name, $birthday, $contact, $position_id, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($editResult) {
        echo json_encode(['result' => 'Edit successful.']);
    } else {
        echo json_encode(['result' => 'Error editing employee.']);
    }
}

// Close the database connection
$conn->close();
?>
