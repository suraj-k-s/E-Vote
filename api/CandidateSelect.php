<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
    $id = $_GET['aid'];
$qry14 = "SELECT * FROM tbl_candidate c INNER JOIN tbl_user u on  c.user_id=u.user_id  INNER JOIN tbl_ward w on c.ward_id=w.ward_id where candidate_vstatus=2 and w.ward_id=(select ward_id from tbl_user where user_id= '".$id."')";

$result = mysqli_query($con, $qry14);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode(array(
    "CandidateSel" => $rows
  ));
} else {
  echo json_encode(array(
    "CandidateSel" => array()
  ));
}
}


?>