<?php
if (isset($_POST['submit'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $phone = $_POST['number'];
    $email = $_POST['email'];
    $subject = "Form submission";

    $to = "jessemakinen@hotmail.com";
    $from = $email;

    $message = $fname . " " . $lname . " kirjoitti portfolio sivuilta:" .  "\n\n" . $_POST['subject'];
    $headers = "From:" . $from;
    mail($to, $subject, $message, $headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
