<?php

include("Connection.php");

if(isset($_GET["delid"]))
{
    $delQry = "delete from tbl_district where district_id='".$_GET["delid"]."'";
 
    if($con->query($delQry))
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
else if($_SERVER['REQUEST_METHOD']=="POST")
{

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $district = $data->district[0];

    if($district!="")
    {
        $insQry = "insert into tbl_district(district_name)values('".$district."')";
 
        if($con->query($insQry))
        {
            echo "Success";
        }
        else
        {
            echo "Failed";
        }
    }
}
else if($_SERVER['REQUEST_METHOD']=="GET")
{
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = "select * from tbl_district";
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