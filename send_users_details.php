<?php
require_once("includes/dbinfo.inc.php");

$conn = mysql_connect("localhost","root","");
mysql_select_db("test_alive",$conn);
$query = "SELECT user_profile_id,user_email, mobile, password FROM tbl_users";
print_r($query);
if (!$query) { // add this check.
    die('Invalid query: ' . mysql_error());
}
$result = mysql_query($query);
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
	//echo "Email is ".$row['user_email'];
	//echo "Password is" .$converter->decode($row['password']);
	$to = $row['user_email'];
	//change the from address 
	$from = "info@alivemeter.com";
	$body = "Your alivemeter account details\\r\\n E-mail id: ".$row['user_email']." Profile id \\r\\n ".$row['mobile']." Password \\r\\n ".$row['password']."";
	$subject = "Your alivemeter account details"; 
	mail($to, $subject, $body); 
}
exit;
?>