<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
$id = $_GET['aid'];
$qry14 = "SELECT * FROM tbl_user WHERE user_id='".$id."'";
$result = mysqli_query($con, $qry14);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $userProfile = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $userProfile[] = $row;
  }
  echo json_encode(array("UserProfile" => $userProfile));
} else {
  echo json_encode(array("UserProfile" => array()));
}
}

?>