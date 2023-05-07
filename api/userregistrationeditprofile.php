<?php

include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
{
    $request = file_get_contents("php://input");
        $data = json_decode($request);

        $User = $_POST["name"];
        $Address = $_POST["address"];
        $Email = $_POST["email"];
        $Phonenumber =$_POST["phoneno"];
        $userid = $_POST["userid"];
        $path= $_POST["photourl"];

        if($_FILES["photo"]!= ""){

        $Photo = $_FILES["photo"]["name"];
        $tmp = $_FILES["photo"]["tmp_name"];
        move_uploaded_file($tmp,"./Userphoto/".$Photo);
               
        $path= "http://localhost/e-vote/api/Userphoto/".$Photo;
        }
        $upQry = "update tbl_user set user_name='".$User."',user_address='".$Address."',user_email='".$Email."',user_phonenumber='".$Phonenumber."',user_photo='".$path."' where user_id='".$userid."'";
        if($con->query($upQry))
        {
            echo "Success";
        }
        else{
            echo "failed";
        } 
}

?>