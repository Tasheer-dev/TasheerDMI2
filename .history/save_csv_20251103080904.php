<?php
$data = json_decode(file_get_contents("php://input"), true);
$file = "data.csv";

if ($data && isset($data["data"])) {
  $f = fopen($file, "a");
  foreach ($data["data"] as $qid => $val) {
    fputcsv($f, [
      $data["username"],
      $data["dept"],
      $qid,
      $val,
      $data["timestamp"]
    ]);
  }
  fclose($f);
  echo "OK";
} else {
  echo "No data received.";
}
?>
