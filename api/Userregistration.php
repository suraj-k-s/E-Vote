<?php

include("Connection.php");


if(isset($_GET["id"]))
    {
        $upQry = "update tbl_user set user_vstatus='1' where user_id='".$_GET["id"]."'";
        if($con->query($upQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
    }

    else if(isset($_GET["uid"]))
    {
        $upQry = "update tbl_user set user_vstatus='2' where user_id='".$_GET["uid"]."'";
        if($con->query($upQry))
            {
                echo "Success";
            }
            else{
                echo "Failed";
            }
    }
    else if(isset($_GET["userid"]))
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_user u inner join tbl_ward w on w.ward_id=u.ward_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id where user_id='".$_GET["userid"]."'";
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
        $User = $_POST["name"];
        $Address = $_POST["address"];
        $Gender = $_POST["gender"];
        $Ward = $_POST["ward"];
        $Email = $_POST["email"];
        $Password = $_POST["password"];
        $Voteridno =$_POST["voteridno"];
        $Phonenumber =$_POST["phonenumber"];
        $Aadhar = $_POST["aadharcardno"]; 

        $Photo = $_FILES["photo"]["name"];
        $tmp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($tmp,"./Userphoto/".$Photo);
               
        $path= "http://localhost/e-vote/api/Userphoto/".$Photo;

        $insQry = "insert into tbl_user(user_name,user_address,user_gender,ward_id,user_email,user_password,user_voteridno,user_photo,user_aadharcardno,user_phonenumber)
        values('".$User."','".$Address."','".$Gender."','".$Ward."','".$Email."','".$Password."','".$Voteridno."','".$path."','".$Aadhar."','".$Phonenumber."')";
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
        $selQry = "select * from tbl_user u inner join tbl_ward w on w.ward_id=u.ward_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_sectionpart s on p.sectionpart_id=s.sectionpart_id where user_vstatus='".$_GET["status"]."'";
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