<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{

$id = $_GET['aid'];
$qry15 = "SELECT * FROM tbl_polling WHERE user_id ='".$id."'";
$result = mysqli_query($con, $qry15);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  echo json_encode(array("CheckVote" => true));
} else {
  echo json_encode(array("CheckVote" => false));
}

}

?>