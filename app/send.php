<?php

header('Content-Type: application/json; charset=UTF-8;');

mb_http_input('UTF-8');
mb_http_output('UTF-8');
mb_internal_encoding('UTF-8');

##################################################################################

$toEmails    = 'gr.a.venom@gmail.com; mondegor@gmail.com; oslissenko@gmail.com; invest-forum@avg-company.ru'; // recipient email address
$returnEmail = 'no-reply@lh-broker.com';
$subject     = 'Рэдиссон 30 ноября'; // subject line for emails
$EOL         = "\r\n";
$HR          = "\r\n------------\r\n";

##################################################################################

$errors = array();

//check if its an ajax request, exit if not
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || 'xmlhttprequest' != strtolower($_SERVER['HTTP_X_REQUESTED_WITH']))
{
    $errors[] = array('', 'Request must come from Ajax');
}
else
{
	if (empty($_REQUEST['userName']))
	{
		$errors[] = array('userName', 'Field is empty');
	}

	if (empty($_REQUEST['userEmail']))
	{
		$errors[] = array('userEmail', 'Field is empty');
	}
	else if (false === filter_var($_REQUEST['userEmail'], FILTER_VALIDATE_EMAIL))
	{
		$errors[] = array('userEmail', 'Email is incorrect');
	}

	if (empty($_REQUEST['userPhone']))
	{
		$errors[] = array('userPhone', 'Field is empty');
	}
}

##################################################################################

if (empty($errors))
{
    $userEmail = $_REQUEST['userEmail'];

    $message  = 'User: ' . $_REQUEST['userName'] . $HR .
                'E-mail: ' . $userEmail . $HR .
                'Phone: ' . $_REQUEST['userPhone'] . $EOL;

    $headers = 'From: ' . ' Redisson 30 november <' . $returnEmail . '> ' . $EOL .
               'Reply-To: ' . $userEmail . $EOL .
               'Return-Path: ' . $returnEmail . $EOL .
               'Mime-Version: 1.0' . $EOL .
               'Content-type: text/plain; charset=UTF-8' . $EOL;

    foreach (explode(';', $toEmails) as $toEmail)
    {
        if (!mb_send_mail($toEmail, $subject, $message, $headers, '-f' . $returnEmail))
        {
            $errors[] = array('userEmail', 'Field is empty');
        }
    }
}

##################################################################################

if (empty($errors))
{
    $result = array('success' => true);
}
else
{
    $result = array('success' => false, 'errors' => $errors);
}

##################################################################################

echo json_encode(array('response' => $result));