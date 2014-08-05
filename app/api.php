        <?php 
header('Access-Control-Allow-Origin: *');




 mysql_connect("localhost","root","");
 
 mysql_select_db("wow") or die("...");
 

 //$fib = $_GET['fib'];

// $res = mysql_query("SELECT * FROM user WHERE fib='$fib'");

 
 $res = mysql_query("SELECT * FROM user LIMIT 10");

 $js = array();
while($row = mysql_fetch_assoc($res)){
  $js[] = $row;

 
 }
header('Content-Type: application/json');

 echo json_encode($js);


 
 
 
 
 
 
 ?>