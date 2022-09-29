<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $address = $_POST['address'];
// $pickup = $_POST['pickup'];
// $description = $_POST['description'];
// $order = $_POST['order'];


// $orderMesage = '<div>Клиент: ' . $name . '.</div>';
// $orderMesage .= '<div><a href="tel:' . $phone. '">Телефон: ' . $phone. '.</a></div>';
// if ($pickup == "on") {
// 	$orderMesage .= '<div>Самовывоз' .'</div>';
// } else {
// 	$orderMesage .= '<div>Адрес доставки: ' . $address . '.</div>';
// }

// if ($description) {
// 	$orderMesage .= '<div>Описание заказа: ' . $description . '.</div>';
// }

$orderMesage .= '<div>Детали заказа: .</div>';

// // $mail->SMTPDebug = 3;     
// if(strripos($order, 'ANTI_SPAM') == false) {
//     header('location: order.html');
//     return;
// }

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jyliu_danshina@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '00p7B4ndL5XLtbXusUTC'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('jyliu_danshina@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('jyliu_danshina@mail.ru');     // Кому будет уходить письмо 
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@examcple.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта dishimdnr.ru';
$mail->Body    = $orderMesage;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: order.html');
}
?>