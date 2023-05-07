<?php
include("Connection.php");
if($_SERVER['REQUEST_METHOD']=="GET")
{
    $id = $_GET['uid'];
     $qry14 = "SELECT * FROM tbl_campaigning c 
          INNER JOIN tbl_candidate cd ON c.candidate_id = cd.candidate_id 
          INNER JOIN tbl_user u ON cd.user_id = u.user_id 
          WHERE cd.user_id = '".$id."' 
          ORDER BY c.campaigning_id DESC";

$result = mysqli_query($con, $qry14);

if (!$result) {
  echo "Error";
} else if (mysqli_num_rows($result) > 0) {
  $campaignCan = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $qry18 = "SELECT campaigning_datetime,CASE  WHEN TIMESTAMPDIFF(SECOND, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(SECOND, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()), ' seconds ago')  WHEN TIMESTAMPDIFF(MINUTE, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()), ' minutes ago') WHEN TIMESTAMPDIFF(HOUR, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()), ' hours ago') WHEN TIMESTAMPDIFF(DAY, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()) < 7 THEN CONCAT(TIMESTAMPDIFF(DAY, STR_TO_DATE(campaigning_datetime, '%m %d %y, %h:%i %p'), NOW()), ' days ago') ELSE DATE(campaigning_datetime) END AS time_elapsed FROM tbl_campaigning where campaigning_id='".$row["campaigning_id"]."' ORDER BY campaigning_datetime DESC";

    $result2 = mysqli_query($con, $qry18);
    $timeElapsed = array();
    if (!$result2) {
      echo "Error";
    } else if (mysqli_num_rows($result2) > 0) {
      while ($row2 = mysqli_fetch_assoc($result2)) {
        $timeElapsed[] = $row2;
      }
    }
    $row['time'] = $timeElapsed;
    $campaignCan[] = $row;
  }
  echo json_encode(array("CampaignCan" => $campaignCan));
} else {
  echo json_encode(array("CampaignCan" => array()));
}
}

?>