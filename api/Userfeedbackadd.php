<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $feedback = $_POST["feedback"];
    $userid =$_POST["userid"];

    $insQry = "insert into tbl_feedback(feedback_content,user_id)values('".$feedback."','".$userid."')";
    if($con->query($insQry))
    {
        echo "Success";
    }
    else{
        echo "false";
    } 
}

?>