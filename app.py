<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dự đoán sạt lở đất</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: auto; text-align: center; padding: 20px; }
        h1 { color: #333; }
        .data { font-size: 1.2em; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dự đoán sạt lở đất</h1>
        <div class="data">
            <p><strong>Nhiệt độ:</strong> {{ data['temperature'] if data['temperature'] else 'No data' }} °C</p>
            <p><strong>Độ ẩm:</strong> {{ data['humidity'] if data['humidity'] else 'No data' }} %</p>
	    <p><strong>Lượng mưa:</strong></p>
	    <p><strong>Khả năng sạt lở đất:</strong></p>
        </div>
    </div>
</body>
</html>
