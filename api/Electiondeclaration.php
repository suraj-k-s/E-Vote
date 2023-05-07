<?php
    include("Connection.php");

    if(isset($_GET["delid"]))
{
    $delQry = "delete from tbl_election where election_id='".$_GET["delid"]."'";
 
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
        $electiondeclaration = $data->electiondeclaration[0];
        $date = $data->date[0];
        $insQry = "insert into tbl_election(election_details,election_date,election_for_date) values ('".$electiondeclaration."',curdate(),'".$date."')";
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
            $selQry = "select * from tbl_election";
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