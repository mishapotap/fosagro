<?php
$message = '';
$rating = '';
$mail = 'bogdanovich@avt.digital';
$from = 'webmaster@phosagro.avt.promo';
$subject = 'Новая оценка';
$body = '';

$arJsonData = array();


if (!empty($_REQUEST['rating']) && !empty($_REQUEST['message'])){

$message = $_REQUEST['message'];
$message = trim($message);
$message = stripslashes($message);
$message = htmlspecialchars($message);


$rating = $_REQUEST['rating'];
$rating = trim($rating);
$rating = stripslashes($rating);
$rating = htmlspecialchars($rating);

	$body .= '<p><b>Оценка:</b><br /> '.$rating.'</p>';
	$body .= '<p><b>Текст сообщения:</b><br />';
	$body .= $rating;
	$body .= '</p>';
	
	
// Для отправки HTML-письма должен быть установлен заголовок Content-type
//$headers[]  = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Дополнительные заголовки
//$headers[] = 'To: AVT <'.$mail.'>';
//$headers[] = 'From: PHOSAGRO <'.$from.'>';

 if (mail($mail, $subject, $body, implode("\r\n", $headers))){
	 http_response_code(200);
	$arJsonData['code'] = 200;
	//$arJsonData['subject'] = $subject;
	//$arJsonData['body'] = $body; 
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