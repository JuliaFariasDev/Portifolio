<?php
$host = "localhost";
$user = "root";
$password = ""; //se não tiver senha deixe dessa forma 
$database = "teste"; //banco de dados para a conexão

/*A CONEXÃO COM O BANCO USANDO A FUNÇÃO mysqli:
//deve estar contida em uma variável desta forma:

$conexao = mysqli_connect($host, $user, $password, $database);

//para saber se a conexao bem sucedida
if (mysqli_connect_error()) {
    throw new Exception("Erro ao conectar com o banco de dados!" . 
      mysqli_connect_error()
      , 1);
} else {
    echo "Estamos conectados!";
}*/

/*A CONEXÃO COM O BANCO USANDO A FUNÇÃO mysqli:
//deve estar contida em uma variável desta forma:

$conn = mysqli_connect($host, $user, $password, $database);

//para saber se a conexao bem sucedida

if (mysqli_connect_error()) {
    echo "Erro ao conectar.";
} else {
    echo "Estamos conectados!";
}*/

//FUNÇÃO COM: MySQli
/*$conn = new MySQLi($host, $user, $password, $database);
// Vamos verificar se a conexão está funcionando 
if ($conn ->connect_error) {
    echo "Erro ao conectar : " . $conn->connect_error;
}else {
    echo "Conectados com sucesso!";
}*/

//Com o PDO não consiguiremos conectar devido a um erro fatal, por isso devemos usar os comandos try e catch.
try{
//Devemos informar o driver, local do banco, seu nome conforme concantenados na linha.
   $conn = new PDO("mysql:host=".$host. ";dbname=" .$database, $user, $password);
   echo "Conectado com sucesso!";
//E incluirmos a variável que irá receber o erro exepcional, caso falha de conexão.
} catch (Exception $e){
    echo "Erro ao conectar: ". $e;
}
?>