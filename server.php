<?php
    $start_time = microtime();
    $data = json_decode(file_get_contents('php://input'), true);
    $x = $data['x_coor'];
    $y = $data['y_coor'];
    $r = $data['r_coor'];

    $result = "";
    $maximum = 17;
    $flag = true;
    $response = "";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!preg_match('/^-?\d+([.,])?\d*$/', $r) ||
            !preg_match('/^-?\d+([.,])?\d*$/', $x) ||
            !preg_match('/^-?\d+([.,])?\d*$/', $y))
            $flag = false;

        
        if ($x < -4 || $x > 4)
            $flag = false;
        if ($r < 1 || $r > 5)
            $flag = false;
        if ($y < -3 || $y > 3)
            $flag = false;
        if (strlen($y) > $maximum || strlen($x) > $maximum || strlen($r) > $maximum)
            $flag = false;

        
        if (($x >= 0 && $y >= 0 && ($x * $x + $y * $y) <= $r * $r / 4) ||
            ($x >= 0 && $y <= 0 && $y*(-1) + $x <= $r/2) ||
            ($x <= 0 && $y >= 0 && (-1) * $x <= $r && $y <= $r)) {
            $result = "Входит";
        } else {
            $result = "Не входит";
        }

        $response .= $flag;
        $response .= ";";
        $response .= $x;
        $response .= ";";
        $response .= $y;
        $response .= ";";
        $response .= $r;
        $response .= ";";
        $response .= $result;
        $response .= ";";
        $response .= date("H:i:s");
        $response .= ";";
        $response .= microtime() - $start_time;
        $response .= "/";
        echo $response;

    }
?>
