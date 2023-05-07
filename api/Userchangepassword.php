<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $request = file_get_contents("php://input");
        $data = json_decode($request);

        $password = $_POST["password"];
        $newpassword = $_POST["newpassword"];
        $confirmpassword = $_POST["confirmpassword"];
        $userid = $_POST["userid"];

        
        $selQry = "select * from tbl_user where user_id='".$userid."' and user_password='".$password."'";
        $result = $con->query($selQry);
        if($row = $result->fetch_assoc())
        {

        if($newpassword==$confirmpassword)
        {
            $upQry = "update tbl_user set user_password='".$newpassword."' where user_id='".$userid."'";
            if($con->query($upQry))
            {
                echo "Success";
            }
            else
            {
                echo "failed";
            }    
        }
        }

    }

?>