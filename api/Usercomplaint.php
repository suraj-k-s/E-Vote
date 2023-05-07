<?php
include("Connection.php");

if(isset($_GET["cid"]))
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);

        $reply = $data->reply[0];
        $upQry = "update tbl_complaint set complaint_reply='".$reply."'where complaint_id='".$_GET["cid"]."'";
 
        if($con->query($upQry))
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
    $Complaint = $_POST["complaint"];
    $userid =$_POST["userid"];

    $insQry = "insert into tbl_complaint(complaint_date,complaint_content,user_id)values(curdate(),'".$Complaint."','".$userid."')";
    if($con->query($insQry))
    {
        echo "Success";
    }
    else{
        echo "false";
    } 
}

else if(isset($_GET["userid"]) )
{
            $i = 0;
            $j = 0;
            $list = array();
            $selQry = "SELECT * FROM  tbl_complaint where user_id='".$_GET["userid"]."'";
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



else if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_complaint c inner join tbl_user u on u.user_id=c.user_id";
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