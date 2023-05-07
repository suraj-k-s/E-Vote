<?php

include("Connection.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST')
 {
    $cid = $_GET['cmid'];
    $sql = "DELETE FROM tbl_comment WHERE comment_id='".$cid."'";
    if (mysqli_query($con, $sql)) {
      $response = array('message' => 'Data deleted');
      echo json_encode($response);
    } else {
      echo "Error: " . mysqli_error($conn);
    }
  }

?>