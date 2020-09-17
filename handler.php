<?
$myurl='http://192.168.0.4/' . $_REQUEST['command'];
if(strlen($_REQUEST['payload']) > 0){
$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $_REQUEST['payload']
    )
);

$context = stream_context_create($opts);
echo  file_get_contents($myurl, false, $context);
}
else {
  echo file_get_contents($myurl);
}
?>
