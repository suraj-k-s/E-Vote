<?php

include("Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$username = $_GET["username"];
$password = $_GET["password"];


$selQry = "select * from tbl_admin where admin_email='".$username."' and admin_password='".$password."'";
$resultA = $con->query($selQry);
$rowsA = array();


$selQry1 = "select * from tbl_user where user_email='".$username."' and user_password='".$password."'";
$resultU = $con->query($selQry1);
$rowsU = array();

$selQry2 = "select * from tbl_electionagent where electionagent_email='".$username."' and electionagent_password='".$password."'";
$resultE = $con->query($selQry2);
$rowsE = array();
 

if($rA = $resultA->fetch_assoc()) 
        {
            $rowsA[] = $rA;
            $rowsA[1] = "Admin"; 
            print json_encode($rowsA); 
        }
        else if($rU = $resultU->fetch_assoc()) 
        {   
            $rowsU[] = $rU;
            $rowsU[1] = "User"; 
            print json_encode($rowsU); 
        }
        else if($rE = $resultE->fetch_assoc()) 
        {
            $rowsE[] = $rE;
            $rowsE[1] = "Agent"; 
            print json_encode($rowsE); 
        } 


?>