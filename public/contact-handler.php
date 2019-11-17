<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "emmaborghult@gmail.com";
    $headers = "Från: ".$email;
    $text = "Du har blivit kontaktad på din hemsida av ".$name.".\n\n".$message;

    mail($mailTo, $text, $headers);
    header("Location: index.html");
}

?>