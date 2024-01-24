<?php


$student_name = $_POST['student_name'];
$Father_name = $_POST['Father_name'];
$Mother_name = $_POST['Mother_name'];
$Roll_number = $_POST['Roll_number'];
$registration_number = $_POST['registration_number'];
$Department = $_POST['Department'];
$Address = $_POST['Address'];
$Mobile_number = $_POST['Mobile_number'];
$S_E_mail = $_POST['S_E_mail'];

// server connect
$servername = 'localhost';
$username = 'root';
$password = '';
$database =  'bpi';

$conn = mysqli_connect($servername,$username,$password,$database);
if(!$conn){
    echo "not connected";
}else{
    echo "connected     ";
}

//inser data student information
$sql = "insert into studentinformation(student_Name,Father_Name,Mother_Name,Roll_Number,registration,Department,student_address,Mobile_Number,E_Mail) values('$student_name','$Father_name','$Mother_name','$Roll_number','$registration_number','$Department','$Address','$Mobile_number'.'$S_E_mail')";
mysqli_query($conn,$sql);
    



?>