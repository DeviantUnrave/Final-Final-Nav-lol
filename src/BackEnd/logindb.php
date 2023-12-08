<?php
// Include the database connection file
include 'dbconn.php';

// Function to validate user credentials
function validateCredentials($employee_id, $password, $conn) {
    
    // Escape variables to prevent SQL injection
    $employee_id = mysqli_real_escape_string($conn, $employee_id);
    $password = mysqli_real_escape_string($conn, $password);

    // Query to check credentials
    $sql = "SELECT user_id FROM Employee_Account WHERE employee_id = '$employee_id' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User credentials are valid
        $row = $result->fetch_assoc();
        return $row['user_id'];
    } else {
        // User credentials are invalid
        return null;
    }
}

// Get credentials from React
$employeeIdFromReact = $_POST['employee_id'];
$passwordFromReact = $_POST['password'];

// Validate credentials
$validatedUserId = validateCredentials($employeeIdFromReact, $passwordFromReact, $conn);

// Close the database connection
$conn->close();

// Send the response to React
echo json_encode(['user_id' => $validatedUserId]);
?>
