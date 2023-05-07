<?php

include("Connection.php");

    if(isset($_GET["delid"]))
    {
        
        $delQry = "delete from tbl_ward where ward_id='".$_GET["delid"]."'";
 
        if($con->query($delQry))
        {
            echo "Success";
        }
        else
        {
         echo "Failed";
        }
    }
    else if(isset($_GET["place"]) )
    { 
        $i = 0; 
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_ward  where place_id='".$_GET["place"]."'";
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

    else if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);
        $place = $data->place[0];
        $ward = $data->ward[0];
        $insQry = "insert into tbl_ward(ward_name,place_id)values('".$ward."','".$place."')";
        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
    }

    
    else if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_ward w inner join tbl_place p on p.place_id=w.place_id inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id inner join tbl_district d on p.district_id=d.district_id";
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