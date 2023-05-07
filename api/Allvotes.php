<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "SELECT * from tbl_polling p INNER JOIN tbl_user u on u.user_id=p.user_id where p.polling_status='1'";
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