<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $interest = $_POST['interest'];
    $website = $_POST['website'];
    $spent = $_POST['spent'];
    $requirements = $_POST['requirements'];

    $to = "info@ayntech.in";
    $subject = "New Enquiry from $name";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nInterest: $interest\nWebsite: $website\nSpent: $spent\nRequirements: $requirements";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>