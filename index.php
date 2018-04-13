<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>HNG INTERNSHIP STAGE 1</title>
  
  
  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>

  <section class="landing">
  <div class="landing-inner">
    <h1>WELCOME TO HNG INTERNSHIP 4</h1>
    <p>An internship program by Mark Essien for developers</p>
    <?php

    date_default_timezone_set('Africa/Lagos');

    // Then call the date functions
    $today = date("F j, Y");

    $hour = date("H"); 
    $min = date("i");
    $secs = date("s");

    
    ?>
    <div class="thedate"><h1> <?php echo $today; ?></h1></div>
    <div class="countdown">
      <div><?php echo $hour; ?></div>:
      <div><?php echo $min; ?></div>:
      <div><?php echo $secs; ?></div>
    </div>
</section>
  

  <!--   <script  src="js/index.js"></script> -->




</body>

</html>
