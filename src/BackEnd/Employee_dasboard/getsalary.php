<?php
// Include the database connection file
include 'dbconn.php';

// Function to get salary by employee_id
function getSalary($employee_id, $conn) {
    // Escape variables to prevent SQL injection
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    // Query to get salary using employee_id
    $sql = "SELECT Salary FROM daily_salary_computation WHERE employee_id = '$employee_id'";
            
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Employee exists, fetch the salary
        $row = $result->fetch_assoc();
        return $row['Salary'];
    } else {
        // Employee not found or no salary record
        return null;
    }
}

// Get employee_id from React
$employee_id = $_POST['employee_id'];

// Get salary
$salary = getSalary($employee_id, $conn);

// Close the database connection
$conn->close();

// Send the response to React
echo json_encode(['salary' => $salary]);
?>
