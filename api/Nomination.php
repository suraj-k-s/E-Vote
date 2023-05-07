<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $election = $data->election;
    $user =$data->userid;
    $ward =$data->ward;

     $selQry= "select * from tbl_candidate where user_id='".$user."'";
    $result= $con->query($selQry);
    if($data=$result->fetch_assoc())
    {
        echo "You already a Candidate";
    }
    else
    {
       $insQry = "insert into tbl_candidate(user_id,election_id,submission_date,ward_id)values('".$user."','".$election."',curdate(),'".$ward."')";
        
        if($con->query($insQry))
        {
           
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = " select max(candidate_id) as pid from tbl_candidate;";
            $row = $con->query($selQry);
            while($data = $row->fetch_assoc())
            {
                $i++;
                $list[] =  $data;
                $list[$j]['message'] = "Success";
                $j++;
            }

            echo json_encode($list);
        }
        else
        {
            echo "Failed";
        } 
    }
    
        
        
}  


?>