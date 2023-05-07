<?php
include("Connection.php");


if(isset($_GET["cid"]))
{ 
    $id = $_GET["cid"];
    $qry14 = "SELECT * FROM tbl_comment c inner join tbl_user u on c.user_id=u.user_id WHERE c.campaigning_id='".$id."'";
    $result = $con->query($qry14);
    
    if ($result->num_rows > 0) {
      $comments = [];
      while ($dat = $result->fetch_assoc()) {
        $qry18 = "SELECT comment_datetime,CASE  WHEN TIMESTAMPDIFF(SECOND, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(SECOND, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()), ' seconds ago')  WHEN TIMESTAMPDIFF(MINUTE, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()), ' minutes ago') WHEN TIMESTAMPDIFF(HOUR, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()), ' hours ago') WHEN TIMESTAMPDIFF(DAY, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()) < 7 THEN CONCAT(TIMESTAMPDIFF(DAY, STR_TO_DATE(comment_datetime, '%m %d %y, %h:%i %p'), NOW()), ' days ago') ELSE DATE(comment_datetime) END AS time_elapsed FROM tbl_comment where comment_id=" . $dat["comment_id"] . " ORDER BY comment_datetime ASC";
        $result2 = $con->query($qry18);
        $dat["time"] = $result2->fetch_assoc();
        array_push($comments, $dat);
      }
      echo json_encode(["Comment" => $comments]);
    } else {
      echo json_encode(["Comment" => []]);
    }

}


else if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);

        $campaign = $_POST["campaign"];
        $user = $_POST["userid"];
        $content = $_POST["content"];
        
    
        $insQry = "insert into tbl_comment(comment_datetime,campaigning_id,user_id,comment_content)
        values(DATE_FORMAT(sysdate(),'%m %d %y, %h:%i %p'),'".$campaign."','".$user."','".$content."')";
        if($con->query($insQry))
        {
            echo "Success";
        }
        else{
            echo "false";
        } 
    }

?>
