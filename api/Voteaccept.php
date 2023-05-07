<?php

include("Connection.php");


if(isset($_GET["id"]))
    {

        $id=$_GET["id"];
       
        $upQry = "update tbl_polling SET polling_status='1' where polling_id='".$id."'";
        if($con->query($upQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
    }

    else if(isset($_GET["uid"]))
    {

        $id=$_GET["uid"];
        $upQry = "update tbl_polling SET polling_status='2' where polling_id='".$id."'";
        if($con->query($upQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
    }

?>
