<?php 
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: POST');
//header('Access-Control-Allow-Methods: GET');

//header('Access-Control-Max-Age: 1000');



 mysql_connect("localhost","root","");
 
 mysql_select_db("wow") or die("...");
 
 
 $user = $_GET['user'];
 
 $fib = $_GET['fib'];
 
 

 $res = mysql_query("SELECT * FROM user");

 echo "darf";
 
 echo mysql_num_rows($res);
while($row = mysql_fetch_assoc($res)){
 
var_dump($row);
 
 }


$ins = "INSERT INTO  `wow`.`user` (
`id` ,
`name` ,
`age` ,
`fib`
)
VALUES (
NULL ,  '$user',  '',  '$fib'
);";

mysql_query($ins);
 
 
 
 
 
 
 ?>