

/*  get submit data  page */


<?php
include_once("CamphConfig.php");

?>


<?php

$name=$_POST["field1"];

$location=$_POST["field2"];

$city=$_POST["field3"];

$province=$_POST["field4"];

$district=$_POST["field5"];

$date=$_POST["field6"];

$voluenteerNo=$_POST["field7"];

$email=$_POST["field8"];

$ContactNO=$_POST["field9"];

$sql="INSERT  INTO camp (id,name,location,city,province,district,date,vol_num,email,contact_num ) VALUES ('','$name','$location','$city','$province','$district','$date','$voluenteerNo','$email','$ContactNO')";


if(mysqli_query($conn,$sql))
{

    echo"<script> alert('Record Inserted Successfully!!')</script>";
    header("Location: ./BloodCamp.html");
}
else
{

    echo"<script> alert('Error in Insertion !')</script>";
}

//close connection

mysqli_close($conn);


?>


