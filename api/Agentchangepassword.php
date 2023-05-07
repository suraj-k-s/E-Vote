<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $request = file_get_contents("php://input");
        $data = json_decode($request);

        $password = $_POST["password"];
        $newpassword = $_POST["newpassword"];
        $confirmpassword = $_POST["confirmpassword"];
        $agentid = $_POST["agentid"];

        
        $selQry = "select * from tbl_electionagent where electionagent_id='".$agentid."' and electionagent_password='".$password."'";
        $result = $con->query($selQry);
        if($row = $result->fetch_assoc())
        {

        if($newpassword==$confirmpassword)
        {
            $upQry = "update tbl_electionagent set electionagent_password='".$newpassword."' where electionagent_id='".$agentid."'";
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