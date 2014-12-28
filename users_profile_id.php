<?php
$conn = mysql_connect("localhost","root","");
mysql_select_db("alive",$conn);

$filename = "user_profile_id.csv";
$fp = fopen($filename, 'w');

//$query = "SELECT user_profile_id FROM tbl_users";
//$result = mysql_query($query);
//while ($row = mysql_fetch_row($result)) {
//	$header[] = $row[0];
//}	
//header('Content-type: application/csv');
//header('Content-Disposition: attachment; filename='.$filename);
//fputcsv($fp, $header);

//$num_column = count($header);		
$query = "SELECT user_id, user_profile_id FROM tbl_users";
$result = mysql_query($query);
while($row = mysql_fetch_row($result)) {
	fputcsv($fp, $row);
}
exit;
?>