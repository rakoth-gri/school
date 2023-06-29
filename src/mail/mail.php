<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

include("phpmailer/Exception.php");
include("phpmailer/PHPMailer.php");
include("phpmailer/SMTP.php");
	

function clear_data($val)
{
	$val = trim($val);
	$val = stripslashes($val);
	$val = htmlspecialchars($val);
	return $val;
}

function validate()
{
	$FORM = [];
	foreach ($_POST as $key => $value) :
		if (!trim($value)) die("Не все поля формы заполнены!");
		$FORM[$key] = clear_data($value);
	endforeach;
	return $FORM;
}

// получаем ассоциативный массив данных из формы, где ключи это имена полей формы!
$FORM = validate();


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.yandex.ru';                   
    $mail->SMTPAuth   = true;                                  
    $mail->Username   = 'rakoth-gri@yandex.ru';                     
    $mail->Password   = '5agu7by5';                              
    $mail->SMTPSecure = 'ssl';            
    $mail->Port       = 465;                                   

    // Recipients
    $mail->setFrom('rakoth-gri@yandex.ru', 'gri-school');
    $mail->addAddress('galievi.f@yandex.ru', 'GRI');    

    // Attachments    
    $mail->addAttachment('../img/poster-ellipse.png', 'poster.jpg');    

    // Content
    $mail->isHTML(true);                                  
    $mail->Subject = 'Заявка на сайте www.gri-school.ru';
    $mail->Body = "<article>
	    <h2 style='color:blue;'> Поступила заявка на сайте www.gri-school.ru </h2>
        <ul style='list-style-type:none; font-size: 1.5rem;'>
            <li> Имя: {$FORM['name']} </li>
            <li> Номер телефона: {$FORM['phone']} </li>
            <li> Запрос: {$FORM['textarea']} </li>
            <li> Технология: {$FORM['select']} </li>            
        </ul>
        </article>
        ";
    
    $mail->send();
    
} 
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>