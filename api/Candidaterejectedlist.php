<?php

include("Connection.php");


 if($_SERVER['REQUEST_METHOD']=="GET")
    { 

        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_candidate c inner join tbl_user u on u.user_id=c.user_id where c.ward_id=(select ward_id from tbl_assignagent where electionagent_id='".$_GET["aid"]."')and 	candidate_vstatus='2'";
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