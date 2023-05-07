<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);

        $Description = $_POST["description"];
        $Candidate = $_POST["candidate"];
        

        $Photo = $_FILES["photo"]["name"];
        $tmp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($tmp,"./Campainingphoto/".$Photo);
        
        $path = "http://localhost/e-vote/api/Campainingphoto/".$Photo;

        $insQry = "insert into tbl_campaigning(campaigning_datetime,campaigning_details,campaigning_file,candidate_id)
        values(DATE_FORMAT(sysdate(),'%m %d %y, %h:%i %p'),'".$Description."','".$path."','".$Candidate."')";
        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "false";
        } 
    }

?>
