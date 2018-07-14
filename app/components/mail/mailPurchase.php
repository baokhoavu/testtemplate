<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp1.https://home-rate-loan.herokuapp.com/.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'baokhoadinhvu@gmail.com';                 // SMTP username
    $mail->Password = '07opgTbafu46';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 2525;                                    // TCP port to connect to

    //Recipients
    $mail->email_from('info@homerateloan.com', 'Mailer');     // Add a recipient
    // $mail->email_address('mton35@gmail.com');               // Name is optional
    $mail->email_address('tealkrysta92@gmail.com');               // Name is optional

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body = 'Customer from HomeRateLoan'."\n";
    $mail->Body = 'Name: '.$_POST['name']."\n";
    $mail->Body = 'State: '.$_POST['state']."\n";
    $mail->Body = 'Rent Type: '.$_POST['renttype']."\n";
    $mail->Body = 'Property Type: '.$_POST['proptype']."\n";
    $mail->Body = 'Price: '.$_POST['price']."\n";
    $mail->Body = 'Down Payment: '.$_POST['downpay']."\n";
    $mail->Body = 'Credit: '.$_POST['credit']."\n";
    $mail->Body = 'Email: '.$_POST['email']."\n";
    $mail->Body = 'Phone: '.$_POST['phone']."\n";


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
