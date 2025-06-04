<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "escola";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Inserir novo aluno
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $password = $_POST["password"];
    $email = $_POST["email"];

    $sql = "INSERT INTO alunos (nome, password, email) VALUES ('$nome', '$password', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Aluno cadastrado com sucesso!');</script>";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

// Deletar aluno
if (isset($_GET["delete"])) {
    $id = $_GET["delete"];
    $sql = "DELETE FROM alunos WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Aluno excluído com sucesso!');</script>";
    } else {
        echo "Erro ao excluir: " . $conn->error;
    }
}
?>

