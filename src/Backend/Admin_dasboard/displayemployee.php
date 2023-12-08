<?php
// Include the database connection file
include 'dbconn.php';

// Function to get all employees
function getAllEmployees($conn) {
    $sql = "SELECT * FROM Employee";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch all employee records
        $employees = $result->fetch_all(MYSQLI_ASSOC);
        return $employees;
    } else {
        return [];
    }
}

// Get all employees
$employees = getAllEmployees($conn);

// Close the database connection
$conn->close();

// Send the response to React as JSON
header('Content-Type: application/json');
echo json_encode(['employees' => $employees]);
?>