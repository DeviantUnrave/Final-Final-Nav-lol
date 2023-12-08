<?php
// Include the database connection file
include 'dbconn.php';

// Function to get daily salary computation for an employee
function getDailySalaryComputation($employee_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    $sql = "SELECT dsal_id, date, Salary, worked_hrs, Deductions, Additional
            FROM `Daily Salary Computation`
            WHERE employee_id = '$employee_id'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch all daily salary computation records
        $salaryComputation = $result->fetch_all(MYSQLI_ASSOC);
        return $salaryComputation;
    } else {
        return [];
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the POST request (assuming 'employee_id' is sent from React)
    $employee_id = $_POST['employee_id'];

    // Get daily salary computation for the employee
    $salaryComputation = getDailySalaryComputation($employee_id, $conn);

    // Send the response to React as JSON
    header('Content-Type: application/json');
    echo json_encode(['salary_computation' => $salaryComputation]);
}

// Close the database connection
$conn->close();
?>