<?php

include("Connection.php");

if(isset($_GET["electionagentid"]))
{ 
    $i = 0;
    $j = 0;
    $list = array();
    $selQry = "select * from tbl_electionagent a inner join tbl_place p on p.place_id=a.place_id inner join tbl_district d on p.district_id=d.district_id  inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id where electionagent_id='".$_GET["electionagentid"]."'";
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
        $Electionagent = $_POST["name"];
        $Address = $_POST["address"];
        $Gender = $_POST["gender"];
        $Place = $_POST["place"];
        $Email = $_POST["email"];
        $Password = $_POST["password"];
        $Voteridno =$_POST["voteridno"];
        $Employementidno = $_POST["employementidno"];
        $Aadhar = $_POST["aadharcardno"];
        $Phoneno = $_POST["phoneno"];

        $Photo = $_FILES["photo"]["name"];
        $tmp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($tmp,"./Electionagentphoto/".$Photo);
        
        $path = "http://localhost/e-vote/api/Electionagentphoto/".$Photo;

        $insQry = "insert into tbl_electionagent(electionagent_name,electionagent_address,place_id,electionagent_email,electionagent_password,electionagent_voteridno,electionagent_employementidno,electionagent_aadharcardno,electionagent_photo,electionagent_doj,electionagent_gender,electionagent_phonenumber)
        values('".$Electionagent."','".$Address."','".$Place."','".$Email."','".$Password."','".$Voteridno."','".$Employementidno."','".$Aadhar."','".$path."',curdate(),'".$Gender."','".$Phoneno."')";
        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "false";
        } 
    }

    else if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_electionagent a inner join tbl_place p on p.place_id=a.place_id inner join tbl_district d on p.district_id=d.district_id  inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id";
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