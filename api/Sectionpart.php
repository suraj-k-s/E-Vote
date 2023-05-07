<?php

include("Connection.php");


    if(isset($_GET["delid"]))
    {
        $delQry = "delete from tbl_sectionpart where sectionpart_id='".$_GET["delid"]."'";
        if($con->query($delQry))
        {
            echo "Success";
        }
        else
        {
            echo "Failed";
        }
    }

    else if($_SERVER['REQUEST_METHOD']=="POST")
    {
        
        $request = file_get_contents("php://input");
      
        $data = json_decode($request);
        $sectionpart = $data->sectionpart[0];

        if($sectionpart!="")
        {
            $insQry = "insert into tbl_sectionpart(sectionpart_name)values('".$sectionpart."')";
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
        $selQry = "select * from tbl_sectionpart";
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