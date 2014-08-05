<?php 
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: POST');
//header('Access-Control-Allow-Methods: GET');

//header('Access-Control-Max-Age: 1000');



 mysql_connect("localhost","root","");
 
 mysql_select_db("wow") or die("...");
 
 
 $user = $_GET['user'];
 
 $fib = $_GET['fib'];
 $gender = $_GET['gender']; 
 //$age = $_GET['age'];
 $age = rand(15,35);
 

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
`gender` ,
`fib`
)
VALUES (
NULL ,  '$user',  '$age', '$gender',  '$fib'
);";

mysql_query($ins) or die(mysql_error());
 
 
 
 
 
 
 ?>