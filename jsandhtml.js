<html>
<head>
  <script src="jquery-2.0.3.js"></script>
  <script>
  $(document).ready(function(){
    $("button").click(function(){
      $("p").addClass(".red");
    });
  })
  </script>
  <style type="text/css">
  .red
  {
    color:red;
    font-size:20px;
    font-weight:bold;
  }
  .important
  {
    color:blue;
    font-size:25px;
  }
  </style>
</head>
<body>
<p>can it change to red</p>
<p>blue is  possible</p>
<button typp="button">click</button>
</body>
</html>