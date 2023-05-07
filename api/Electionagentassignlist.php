<?php

include("Connection.php");

 if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "SELECT * FROM tbl_assignagent a INNER JOIN tbl_electionagent e on e.electionagent_id=a.electionagent_id INNER JOIN tbl_ward w ON w.ward_id=a.ward_id inner join tbl_election el on el.election_id=a.election_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_sectionpart s on s.sectionpart_id=p.sectionpart_id inner join tbl_district d on d.district_id=p.district_id";
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