<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
    $id = $_GET['uid'];

$qry14 = "SELECT * FROM tbl_candidate cd INNER JOIN tbl_user us ON cd.user_id=us.user_id WHERE cd.ward_id=(SELECT DISTINCT u.ward_id FROM tbl_candidate c INNER JOIN tbl_user u ON c.ward_id=u.ward_id WHERE u.user_id='".$id."')";

$result = mysqli_query($connection, $qry14);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $rows = array();
  while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
  }
  echo json_encode(array("CandidateSel" => $rows));
} else {
  echo json_encode(array("CandidateSel" => array()));
}
}

?>