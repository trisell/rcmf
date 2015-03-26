<?php
error_reporting(-1);
ini_set('display_errors', 'On');
//add the recipient's address here
$myemail = 'ddesimini@outlook.com';
 
//grab named inputs from html then post to #thanks

$teamName = ($_POST['teamName']);
$teamContact = strip_tags($_POST['teamContact']);
$teamPhone = strip_tags($_POST['tcPhone']);
$teamEmail = strip_tags($_POST['tcEmail']);
$teamMember1 = strip_tags($_POST['tm1']);
$teamMember2 = strip_tags($_POST['tm2']);
$teamMember3 = strip_tags($_POST['tm3']);
$teamMember4 = strip_tags($_POST['tm4']);
$team1Shirt = strip_tags($_POST['tm1Shirt']);
$team2Shirt = strip_tags($_POST['tm2Shirt']);
$team3Shirt = strip_tags($_POST['tm3Shirt']);
$team4Shirt = strip_tags($_POST['tm3Shirt']);
//echo "<span class=\"alert alert-success\" >Your message has been received. Thanks! Here is what you submitted:</span><br><br>";

 
//generate email and send!
$to = $myemail;
$email_subject = "Golf Team Submition: $teamContact";
$email_body = "Please see the attached form for team details. ".
" Here are the details:\n Team Name: $teamName \n ".
"Team Contact: $teamContact\n Team Contact Phone #: teamPhone".
"Team Contact Email: $teamEmail\n". 
"Team Member 1: $teamMember1;\n Team Member 1 Shirt Size: team1Shirt\n".
"Team Member 2: $teamMember2\n Team Member 2 Shirt Size: team2Shirt".
"Team Member 3: $teamMemeber3\n Team Member 3 Shirt Size: team3Shirt".
"Team Member 4: $teamMemeber4\n Team Member 4 Shirt Size: $team4Shirt"
$headers = "From: $myemail\n";
mail($to,$email_subject,$email_body,$headers);

?>