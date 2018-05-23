<?php
$to      = 'contact@digirolamoemilie.fr';
$subject = $_POST["object"];
$message = $_POST["message"];
$headers = 'From: ' . $_POST["name"] . "<" . $_POST["mailadress"] . ">\r\n" .
    'Reply-To: ' . $_POST["mailadress"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo "<script language='Javascript'>document.location='index.html'</script>";
?>
