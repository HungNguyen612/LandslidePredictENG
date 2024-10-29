from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Store the latest sensor data
latest_data = {'temperature': None, 'humidity': None}

# Route for ESP8266 to upload data
@app.route('/upload', methods=['POST'])
def upload_data():
    global latest_data
    data = request.json  # Receive JSON data from ESP8266
    print(f"Received data: {data}")
    latest_data = data   # Update the latest data
    return jsonify({"status": "Data received"}), 200

# Dashboard route to display the data
@app.route('/')
def dashboard():
    return render_template('index.html', data=latest_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
