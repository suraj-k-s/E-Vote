<?php


include("Connection.php");

 if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_electionagent a inner join tbl_place p on p.place_id=a.place_id inner join tbl_district d on p.district_id=d.district_id  inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id where assign_status='0'";
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