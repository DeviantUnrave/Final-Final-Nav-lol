<?php
// Include the database connection file
include 'dbconn.php';

// Function to log time
function logTime($date, $time, $text, $employee_id, $conn) {
    $date = mysqli_real_escape_string($conn, $date);
    $time = mysqli_real_escape_string($conn, $time);
    $text = mysqli_real_escape_string($conn, $text);
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    // Insert record into Time_Log table
    $sql = "INSERT INTO Time_Log (date, time, `in/out`, employee_id) 
            VALUES ('$date', '$time', '$text', '$employee_id')";

    if ($conn->query($sql) === TRUE) {
        // Check if the text is 'out', then update daily salary
        if ($text === 'out') {
            updateDailySalary($employee_id, $conn);
        }

        return "Time logged successfully.";
    } else {
        return "Error logging time: " . $conn->error;
    }
}

function updateDailySalary($employee_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    // Get the 2 latest time log entries
    $sql = "SELECT time FROM Time_Log
            WHERE employee_id = '$employee_id'
            ORDER BY date DESC, time DESC
            LIMIT 2";

    $result = $conn->query($sql);

    if ($result->num_rows >= 2) {
        $entries = $result->fetch_all(MYSQLI_ASSOC);

        // Calculate worked hours
        $time1 = strtotime($entries[0]['time']);
        $time2 = strtotime($entries[1]['time']);
        $workedHours = abs($time1 - $time2) / 3600; // in hours

        // Get position_id and per_day value
        $positionInfo = getPositionInfo($employee_id, $conn);
        $position_id = $positionInfo['position_id'];
        $perDay = $positionInfo['per_day'];

        // Calculate salary and update Daily Salary Computation table
        $salary = $perDay * $workedHours;
        $date = date("Y-m-d");
        $sql = "INSERT INTO Daily_Salary_Computation (employee_id, position_id, date, worked_hrs, Salary)
                VALUES ('$employee_id', '$position_id', '$date', '$workedHours', '$salary')";

        if ($conn->query($sql) === TRUE) {
            return "Salary updated successfully.";
        } else {
            return "Error updating salary: " . $conn->error;
        }
    } else {
        return "Insufficient time entries for salary calculation.";
    }
}

// Function to fetch position_id and per_day value
function getPositionInfo($employee_id, $conn) {
    $employee_id = mysqli_real_escape_string($conn, $employee_id);

    $sql = "SELECT P.position_id, P.per_day FROM Position P
            JOIN Employee E ON P.position_id = E.position_id
            WHERE E.employee_id = '$employee_id'";

    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        return $result->fetch_assoc();
    } else {
        return false;
    }
}


// Get data from React
$date = $_POST['date'];
$time = $_POST['time'];
$text = $_POST['text']; // Assuming 'in' or 'out'
$employee_id = $_POST['employee_id'];

// Log time
$logResult = logTime($date, $time, $text, $employee_id, $conn);

// Close the database connection
$conn->close();

?>

