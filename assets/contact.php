<?php
 
// Email address verification
function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
 
if($_POST) {
 
    // Enter the email where you want to receive the message
    $emailTo = 'icgcct@gmail.com';
 
    $clientName = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $message = addslashes(trim($_POST['message']));
 
    $array = array('nameMessage' => '', 'emailMessage' => '', 'messageMessage' => '');
    
     if(!isName($clientName)) {
        $array['nameMessage'] = 'Please enter your name!';
    }
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if(isName($clientName) && isEmail($clientEmail) && $message != '') {
        // Send email
        $headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
        mail($emailTo, $clientName . " (Contact Us)", $message, $headers);
    }
 
    echo json_encode($array);
 
}
 
?>