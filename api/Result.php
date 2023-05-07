<?php
include("Connection.php");
$id = $_GET['id'];
 $qry14 = "select * from tbl_candidate c inner join tbl_user u on u.user_id=c.user_id where c.ward_id=(select ward_id from tbl_user WHERE user_id=" . $id.")";

$result = mysqli_query($con, $qry14);
if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $data = array();
  while ($dat = mysqli_fetch_assoc($result)) {
    $qry18 = "SELECT COUNT(polling_id) AS numVote FROM tbl_polling WHERE candidate_id=" . $dat['candidate_id'];
    $result2 = mysqli_query($con, $qry18);
    $row2 = mysqli_fetch_assoc($result2);
    $dat['vote'] = $row2['numVote'];
    $data[] = $dat;
  }
  echo json_encode(array("Result" => $data));
} else {
  echo json_encode(array("Result" => []));
}

?>