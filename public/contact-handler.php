<?php
 if (isset($_POST['submit'])){
    require_once '/path/to/vendor/autoload.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Create the Transport
    $transport = (new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl'))
      ->setUsername('emmaborghult@gmail.com')
      ->setPassword('flingan95')
    ;
    
    // Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);
    
    // Create a message
    $msg = (new Swift_Message('Mail från hemsidan'))
      ->setFrom([$email => $name])
      ->setTo(['emmaborghult@gmail.com'])
      ->setBody('Namn: $name.Email: $email.Meddelande: $message');
    
    // Send the message
    $result = $mailer->send($msg);
  
 }

?>