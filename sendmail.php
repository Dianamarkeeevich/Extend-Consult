<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer-6.4.0/src/Exception.php';
require 'PHPMailer-6.4.0/src/PHPMailer.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail ->setLanguage('ru','PHPMailer-6.4.0/language/');
$mail ->IsHTML(true);


    //Recipients
    $mail->setFrom('info@extend-consult.com', 'Extend Consult');
    $mail->addAddress('d.mrkvch@gmail.com');
    $mail->Subject ='Заявка на консультацию extend-consult.com';


    $mail->Body    = '<h1>Заявка на консультацию extend-consult.com</h1>';

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()){
            $message = 'Message could not be sent';
        } else {
            $message = 'Message has been sent';
        }

        $response = ['message'=> $message];
        header ('Content-type: application/json');
        echo json_encode($response);
?>