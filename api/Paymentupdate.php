<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
    {

        
         $upQry = "update tbl_candidate set candidate_status='payment completed' where candidate_id='".$_GET["pid"]."'";
        if($con->query($upQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
    }

?>