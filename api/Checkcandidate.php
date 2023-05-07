<?php

include("Connection.php");


if(isset($_GET["uid"]))
    {
        
        $uid= $_GET["uid"];

        $selQry = " select * from tbl_candidate where user_id='".$uid."'";
        $result = $con->query($selQry);
        if($data=$result->fetch_assoc())
        {
            echo json_encode(array(
                "CheckCandidate" => true,
                "Cad_id" => $data["candidate_id"],
              ));
        }
        else 
        {
            echo json_encode(array(
                "CheckCandidate" => false,
              ));
        }

        
    }
?>