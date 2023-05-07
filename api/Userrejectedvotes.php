<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
    $id=$_GET["aid"];
    
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_polling p inner join tbl_user u on u.user_id=p.user_id where u.ward_id=(SELECT ward_id from tbl_electionagent where electionagent_id='".$id."') and polling_status='2'";
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
