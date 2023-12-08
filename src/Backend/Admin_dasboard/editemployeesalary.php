<?php
// Include the database connection file
include 'dbconn.php';

// Function to edit daily salary computation
function editDailySalaryComputation($dsal_id, $date, $salary, $worked_hrs, $deductions, $additional, $conn) {
    $dsal_id = mysqli_real_escape_string($conn, $dsal_id);
    $date = mysqli_real_escape_string($conn, $date);
    $salary = mysqli_real_escape_string($conn, $salary);
    $worked_hrs = mysqli_real_escape_string($conn, $worked_hrs);
    $deductions = mysqli_real_escape_string($conn, $deductions);
    $additional = mysqli_real_escape_string($conn, $additional);

    // Update daily salary computation record in the `Daily Salary Computation` table
    $sql = "UPDATE `Daily Salary Computation`
            SET date = '$date',
                Salary = '$salary',
                worked_hrs = '$worked_hrs',
                Deductions = '$deductions',
                Additional = '$additional'
            WHERE dsal_id = '$dsal_id'";

    if ($conn->query($sql) === TRUE) {
        return true; // Indicate successful edit
    } else {
        return false; // Indicate error
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request
    $dsal_id = $_POST['dsal_id'];
    $date = $_POST['date'];
    $salary = $_POST['salary'];
    $worked_hrs = $_POST['worked_hrs'];
    $deductions = $_POST['deductions'];
    $additional = $_POST['additional'];

    // Edit the daily salary computation
    $editResult = editDailySalaryComputation($dsal_id, $date, $salary, $worked_hrs, $deductions, $additional, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    
    if ($editResult) {
        echo json_encode(['result' => 'Edit successful.']);
    } else {
        echo json_encode(['result' => 'Error editing Salary.']);
    }
}

// Close the database connection
$conn->close();
?>
