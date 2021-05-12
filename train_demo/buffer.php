<?php
    $t_no=$_GET['t_no'];
    $date=$_GET['date'];
    echo $t_no, "<br>";
    echo $date;
    $new_date=str_replace("-","", $date);
    echo "<br>".$new_date;
    $url="http://indianrailapi.com/api/v2/livetrainstatus/apikey/5d3f7fbbee63671f084b59826c8c7276/trainnumber/".$t_no."/date/".$new_date."/";
  $data=file_get_contents($url);
  $json=json_decode($data,true);
  $res=$json['ResponseCode'];
  echo "<br>".$res;
  $arr=json_encode($json['CurrentStation']['StationName']);
  //echo "<br> Current Position :".implode(" ",$json['CurrentStation']);
  echo "<br> Current Position=".$arr."<br>";
  $i=0;
  echo "STATION LIST <br>";
  echo "<table border=2><tr><td>S.No.</td><td>Station Name</td><td>Delay In Arrival</td><td> Schedule Time</tr>";
  while(isset($json['TrainRoute'][$i]['StationName'])){
  	$num=$i+1;
  	echo "<tr><td>".$num."</td>";
  	echo "<td>".$json['TrainRoute'][$i]['StationName']."</td>";
  	echo "<td>".$json['TrainRoute'][$i]['DelayInArrival']."</td>";
  	echo "<td>".$json['TrainRoute'][$i]['ScheduleArrival']."</td></tr>";
  	$i++;
  }
  echo "</table>";


?>
