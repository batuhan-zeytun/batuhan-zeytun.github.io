<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Activity6 Preview</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

  <h2>Registration Form - Preview</h2>

  <div class="result-container">
    <?php
    
      $fields = [
        'name'     => 'Name',
        'username' => 'Username',
        'password' => 'Password',
        'address'  => 'Address',
        'country'  => 'Country',
        'zip'      => 'ZIP Code',
        'email'    => 'Email',
        'sex'      => 'Sex',
        'about'    => 'About'
      ];

     

      foreach ($fields as $field => $label) {
        if (isset($_POST[$field]) && trim($_POST[$field]) !== '') {
        
          echo "<div><span class='label'>$label:</span> " . htmlspecialchars($_POST[$field]) . "</div>";
        } else {
          echo "<div><span class='label'>$label:</span> Not provided</div>";
        }
      }

     
      echo "<div><span class='label'>Language:</span> ";
      if (isset($_POST['language']) && is_array($_POST['language']) && count($_POST['language']) > 0) {
      
        $languages = array_map('htmlspecialchars', $_POST['language']);
        echo implode(', ', $languages);
      } else {
        echo "Not provided";
      }
      echo "</div>";
    ?>
  </div>

</body>
</html>
