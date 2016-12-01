<html>
<head>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
</head>
<body>
    <p>
        <?php echo str_repeat('<i class="fa fa-star"></i> ',get_field("rating")); ?>
        <?php echo is_float(get_field("rating")) ? '<i class="fa fa-star-half"></i>' : ''; ?>
    </p>
</body> 
</html>