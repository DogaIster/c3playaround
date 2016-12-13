<?php 
$serverName = "testdbaws.cjuyegak5pco.us-east-1.rds.amazonaws.com";
$connectionInfo = array( "Database"=>"MobiControl_aws", "UID"=>"awsuser", "PWD"=>"Welcome123", "MultipleActiveResultSets"=>"1", "MultipleActiveResultSets"=>"true" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);

$sql = 'report_getBatteryData @datefrom=?, @datetill=?, @datasetno=?';
$params = array("2016-08-20", "2016-08-21", 2);
$res = sqlsrv_query($conn, $sql, $params);

if( $res === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$cols = [];
foreach( sqlsrv_field_metadata( $res ) as $fieldMetadata ) {
    foreach( $fieldMetadata as $name => $value) {
       if ($name === "Name") {
			array_push($cols,  $value);
			array_push($cols, ",");
	   }
    }
}
$cols = array_slice($cols, 0, -1);
foreach ($cols as &$colname) {
echo $colname;
}	
unset($colname);
	echo "\r\n";

while( $obj = sqlsrv_fetch_object($res)) {
      echo $obj->avg_slope.",".$obj->cnt."\r\n";
}
sqlsrv_free_stmt($res);

?>