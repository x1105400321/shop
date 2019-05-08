<?php  
	
	include "conn.php";
	
	$id=$_GET['sid'];
	
	$result=mysql_query("select * from goods where sid=$id ");
	
	$shop=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($shop);

?>