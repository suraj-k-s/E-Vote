<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $user = $data->user_id;
    $candidate = $data->candidate_id;
    $qry12 = "insert into tbl_polling(polling_datetime,user_id,candidate_id	) values(DATE_FORMAT(sysdate(),'%m %d %y, %h:%i %p'),'" .$user. "','".$candidate."')";

$result = mysqli_query($con, $qry12);

if (!$result) {
  echo $qry12;
} else {
  echo json_encode(array(
    "message" => "Data Saved"
  ));
}
}

?>
