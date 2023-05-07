<?php

include("Connection.php");

if(isset($_GET["aid"])&&($_GET["agent"]))
    {
        
        $delQry = "delete from tbl_assignagent where assign_id='".$_GET["aid"]."'";

        $upQry = "update tbl_electionagent set assign_status='0' where electionagent_id='".$_GET["agent"]."'";
        $con->query($upQry);

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
    $election = $_POST["election"];
    $agent = $_POST["agent"];
    $ward =$_POST["ward"];

        $insQry = "insert into tbl_assignagent(assign_date,election_id,electionagent_id,ward_id)values(curdate(),'".$election."','".$agent."','".$ward."')";
 
        if($con->query($insQry))
        {
            echo "Success";
        }
        else
        {
            echo "Failed";
        }


        $upQry = "update tbl_electionagent set assign_status='1' where electionagent_id='".$agent."'";
        $con->query($upQry);
}       

else if($_SERVER['REQUEST_METHOD']=="GET")
{
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = "SELECT * from tbl_assignagent a INNER JOIN tbl_ward w on w.ward_id=a.ward_id INNER join tbl_place p on w.place_id=p.place_id inner join tbl_sectionpart s on s.sectionpart_id=p.sectionpart_id inner JOIN tbl_district d on d.district_id=p.district_id INNER JOIN tbl_electionagent e on e.electionagent_id=a.electionagent_id;";
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