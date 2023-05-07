<?php 


include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = "SELECT * FROM  tbl_candidate c inner JOIN tbl_ward w on w.ward_id=c.ward_id INNER JOIN tbl_place p on p.place_id=w.place_id INNER JOIN 
            tbl_sectionpart s on s.sectionpart_id=p.sectionpart_id INNER JOIN tbl_district d on d.district_id=p.district_id inner JOIN tbl_election e on e.election_id=c.election_id where user_id='".$_GET["userid"]."'";
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