<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
            $id=$_GET["eid"];
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = "SELECT * FROM tbl_user u INNER JOIN tbl_ward w on w.ward_id=u.ward_id INNER JOIN tbl_place p on p.place_id=w.place_id INNER JOIN tbl_sectionpart s on s.sectionpart_id=p.sectionpart_id INNER JOIN tbl_district d on d.district_id=p.district_id where u.ward_id=(SELECT ward_id from tbl_assignagent where electionagent_id='".$id."')and user_vstatus='3'";
            $row = $con->query($selQry);
            while($data = $row->fetch_assoc())
            {
                $i++;
                $list[] =  $data;
                $list[$j]['id'] = $i;
                $j++;
            }
            echo json_encode($list);
}

?>
