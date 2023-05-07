<?php

include("Connection.php");

if(isset($_GET["delid"]))
{
    $delQry = "delete from tbl_place where place_id='".$_GET["delid"]."'";
 
    if($con->query($delQry))
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
else if(isset($_GET["section"]) && isset($_GET["district"]))
    { 
        $i = 0; 
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_place  where sectionpart_id='".$_GET["section"]."' and district_id='".$_GET["district"]."'";
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
        else if(isset($_GET["district"]))
        { 
            $i = 0; 
            $j = 0;
            $list = array();
             $selQry = "select * from tbl_place  where district_id='".$_GET["district"]."'";
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
        // $Place = $_POST["txt_place"];
        // $District = $_POST["sel_district"];
        // $Sectionpart = $_POST["sel_sectionpart"];

        $request = file_get_contents("php://input");
        $data = json_decode($request);
        $place = $data->place[0];
        $sectionpart = $data->section[0];
        $district = $data->district[0];
        $insQry = "insert into tbl_place(place_name,sectionpart_id,district_id)values('".$place."','".$sectionpart."','".$district."')";
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
        $selQry = "select * from tbl_place p inner join tbl_sectionpart s on s.sectionpart_id=p.sectionpart_id inner join tbl_district d on p.district_id=d.district_id";
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