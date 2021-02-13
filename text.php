<?php

$dt = date("Y-m-d");
$datereturn = date( "Y-m-d", strtotime( "$dt +7 day" ) );
echo $dt;
echo '<br>';
echo $datereturn;



?>