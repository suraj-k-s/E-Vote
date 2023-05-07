<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
    $qry15 = "select * from tbl_election";
$result = mysqli_query($con, $qry15);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $elections = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $elections[] = $row;
  }
  echo json_encode(array("CheckElection" => $elections));
} else {
  echo json_encode(array("CheckElection" => array()));
}

}



?>