<?php
// Include the database connection file
include 'dbconn.php';

// Function to get employee details by user_id
function getEmployeeDetails($user_id, $conn) {
    // Escape variables to prevent SQL injection
    $user_id = mysqli_real_escape_string($conn, $user_id);

    // Query to get employee details
    $sql = "SELECT e.employee_id, e.last_name 
            FROM employee e 
            JOIN employee_account ea ON e.employee_id = ea.employee_id 
            WHERE ea.user_id = '$user_id'";
            
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User exists, fetch the employee details
        $row = $result->fetch_assoc();
        return [
            'employee_id' => $row['employee_id'],
            'last_name' => $row['last_name']
        ];
    } else {
        // User not found
        return null;
    }
}

// Get user_id from React
$user_idemployee = $_POST['user_id'];

// Get employee details
$employeeDetails = getEmployeeDetails($user_idemployee, $conn);

// Close the database connection
$conn->close();

// Send the response to React
echo json_encode(['employee_details' => $employeeDetails]);
?>
