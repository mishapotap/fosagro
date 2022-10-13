<?php
$message = '';
$rating = '';
$email = '';
$mail = 'esg@phosagro.ru'; // 'leonov@avt.digital'; 'pleshkosvetlana00@gmail.com'; 'bogdanovich@avt.digital'
$from =  'esg@phosagro.ru';
$subject = 'Сообщение с формы обратной связи Курса устойчивого развития';
$body = '';

$arJsonData = array();

if(empty($_REQUEST['rating']) && empty($_REQUEST['message']) && empty($_REQUEST['email'])){
	$data = json_decode(file_get_contents("php://input"),true);

	$_REQUEST['rating'] = $data['rating'];
	$_REQUEST['message'] = $data['message'];
	$_REQUEST['email'] = $data['email'];
}

if (!empty($_REQUEST['rating']) or !empty($_REQUEST['message']) or !empty($_REQUEST['email'])){

$message = $_REQUEST['message'];
$message = trim($message);
$message = stripslashes($message);
$message = htmlspecialchars($message);

$rating = $_REQUEST['rating'];
$rating = trim($rating);
$rating = stripslashes($rating);
$rating = htmlspecialchars($rating);

$email = $_REQUEST['email'];
$email = trim($email);
$email = stripslashes($email);
$email = htmlspecialchars($email);


if(!empty($rating))
	$body .= '<p><b>Оценка:</b><br /> '.$rating.'</p>';
if(!empty($message)){
	$body .= '<p><b>Текст сообщения:</b><br />';
	$body .= $message;
	$body .= '</p>';
}
if(!empty($email))
	$body .= '<p><b>Email:</b><br /> '.$email.'</p>';


$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Дополнительные заголовки
//$headers[] = 'To: AVT <'.$mail.'>';
$headers[] = 'From: PHOSAGRO <'.$from.'>';

 if (mail($mail, $subject, $body, implode("\r\n", $headers))){
	 http_response_code(200);
	$arJsonData['code'] = 200;
  }else{
	 http_response_code(300);
	$arJsonData['code'] = 300;
  }

}
else {
	http_response_code(300);
	$arJsonData['code'] = 300;
}

header('Content-Type: application/json');
$strJson = json_encode($arJsonData);
echo $strJson;
?>