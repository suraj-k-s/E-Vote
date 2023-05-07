<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
{
    $request = file_get_contents("php://input");
    $data = json_decode($request);

    $i = 0;
    $j = 0;
    $list = array();

    $user = $_GET["userid"];

$sel = "select * from tbl_election e inner join tbl_assignagent ag on ag.election_id=e.election_id inner join tbl_electionagent ea on ea.electionagent_id=ag.electionagent_id inner join tbl_ward agw on agw.ward_id=ag.ward_id inner join tbl_place ssp on ssp.place_id=agw.place_id where ag.ward_id in (SELECT ward_id from tbl_ward  WHERE place_id=(select w.place_id from tbl_user u inner join tbl_ward w on w.ward_id=u.ward_id WHERE u.user_id='".$user."'))";
$row = $con->query($sel);
while($data=$row->fetch_assoc())
{
        $i++;
        $list[$j] = $data;
        $list[$j]['id'] = $i;

    $sel1 = "SELECT * from tbl_candidate c inner join tbl_user u on u.user_id=c.user_id where c.ward_id='" . $data["ward_id"]."'";
	$row1 = $con->query($sel1);
	while($data1=$row1->fetch_assoc())
	{
		
        $list[$j]['candidate'] = $data1 ;
        
	}
    $j++;
}
echo json_encode($list);
}

?>