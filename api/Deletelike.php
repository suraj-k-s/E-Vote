<?php
include("Connection.php");

if(isset($_GET["uid"])&&($_GET["cid"]))
{ 
    $delQry = "delete from tbl_like where campaigning_id='".$_GET["cid"]."' and user_id='".$_GET["uid"]."'";
 
    if($con->query($delQry))
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}


?>