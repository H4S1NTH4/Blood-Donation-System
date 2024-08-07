<?php
include_once ('db.php');

// Check if the connection was successful
if (!$con) {
    echo "Database connection failed.";
    exit;
}

// Check if the review ID is provided
if (!isset($_GET['id'])) {
    echo "Review ID not provided.";
    exit;
}

$id = $_GET['id'];

// Delete the review from the database
$deleteQuery = "DELETE FROM reviews WHERE reviewId = $id";
$deleteResult = mysqli_query($con, $deleteQuery);

if ($deleteResult) {
    // Redirect back to the reviews page
    echo "Review submitted successfully.";
    mysqli_close($con);
    echo '<script>alert("Review deleted successfully.");</script>';
    echo '<script>window.location.href = "review.php";</script>';
    exit;
} else {
    echo "Failed to delete the review: " . mysqli_error($con);
}

// Close the database connection
mysqli_close($connection);
?>
