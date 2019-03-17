<?php
$email = htmlspecialchars ($_POST["email"]);
$phone = htmlspecialchars ($_POST["phone"]);
$name = htmlspecialchars ($_POST["name"]);
$message= htmlspecialchars ($_POST["message"]);

if($name == '' || $email == '' || $phone == '' || $message == ''){
  echo 'Заполните все поля';
  exit;
}

if(mail("artmartpos@gmail.com", "Заказ с сайта", "ФИО:".$name.".\r\n E-mail: ".$email.".\r\n Телефон: ".$phone."\r\n Сообщение: ".$message,"From: artmartpos@gmail.com \r\n")){
 echo "Сообщение отправленно";
}
else
  echo "Сообщение не отправленно";
?>
