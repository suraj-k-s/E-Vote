<?php
include("Connection.php");


if(isset($_GET["id"]))
    {

        $id=$_GET["id"];
       
        $upQry = "update tbl_candidate SET candidate_vstatus='1' where candidate_id='".$id."'";
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
        $upQry = "update tbl_candidate SET candidate_vstatus='2' where candidate_id='".$id."'";
        if($con->query($upQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
    }



?>