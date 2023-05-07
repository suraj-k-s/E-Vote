<?php
include("Connection.php");

if(isset($_GET["uid"])&&($_GET["cid"]))
{ 
    $delQry = "select * from tbl_like where campaigning_id='".$_GET["cid"]."' and user_id='".$_GET["uid"]."'";
    $row = $con->query($delQry);
    if($data = $row->fetch_assoc()) 
    {
        echo "true";
    }
    else
    {
        echo "false";
    }
    
}

else if($_SERVER['REQUEST_METHOD']=="POST")
{

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $user = $data->userid;
    $campiningid = $data->campaignid;

        $insQry = "insert into tbl_like(user_id,campaigning_id)values('".$user."','".$campiningid."')";
 
        if($con->query($insQry))
        {
            echo "Success";
        }
        else
        {
            echo "Failed";
        }
}



?>
