<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Email information
    $to = "sebastian.soto1649@gmail.com"; // Enter your email address here
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Sorry, an error occurred. Please try again later.";
    }
}
?>
