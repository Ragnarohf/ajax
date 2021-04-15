<?php
//var_dump($_GET);
$pdo = new PDO("mysql:host=localhost;dbname=vinyl_shop;charset=utf8", 'root', '', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);
$error = null;
try {
    $email = $_GET['email'];


    $statement = $pdo->prepare("SELECT * from user where email = :email ");
    $statement->execute([
        'email' => $email
    ]);
    $user = $statement->fetch();
    // var_dump($user['pwd']);
    // var_dump(password_verify($_GET['password'], $user['pwd']));
    if (password_verify($_GET['password'], $user['pwd'])) {
        echo "welcome in your profil";
    } else {
        echo "erreur de connexion";
    }
    // 
    // print_r($user);


} catch (PDOException $e) {
    $error = $e->getMessage();
}
