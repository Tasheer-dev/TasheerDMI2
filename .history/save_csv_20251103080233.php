<?php
// save_csv.php
$data = json_decode(file_get_contents("php://input"), true);
$file = 'responses.csv';

if ($data) {
  $header = ['username', 'dept', 'questionId', 'value', 'timestamp'];
  $writeHeader = !file_exists($file);

  $f = fopen($file, 'a');
  if ($writeHeader) fputcsv($f, $header);
  fputcsv($f, [
    $data['username'],
    $data['dept'],
    $data['questionId'],
    $data['value'],
    $data['timestamp']
  ]);
  fclose($f);
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error"]);
}
?>
