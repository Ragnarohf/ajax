<?php
// var_dump($_GET);

$pdo = new PDO('mysql:host=localhost;dbname=vinyl_shop;charset=utf8', 'root', '', array(
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
));
$error = null;
try {
    $statement = $pdo->query("SELECT * from user where email='sandranicouette@dodo.com'");
    var_dump($statement);
} catch (PDOException $exe) {
    $error = $exe->getMessage();
}
if (!empty($_GET)) {
    echo "<h1>je suis bien connecté $_GET[email]</h1>";
}
