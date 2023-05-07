<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
    {
       
        $insQry = "update tbl_polling set polling_status='2' where polling_status='1'";
        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
    }


?>