<?php
include("Connection.php");

if(isset($_GET["cid"]))
{ 
        $i = 0; 
        $j = 0;
        $list = array();
        $selQry = "SELECT COUNT(comment_id) AS numComment FROM tbl_comment WHERE campaigning_id='".$_GET["cid"]."'";
        $row = $con->query($selQry);
        while($data = $row->fetch_assoc()) 
        {
            $i++;
            $list[] = $data;
            $list[$j]['id'] = $i;
            $j++;
        }
            echo json_encode($list);
    
}


?>