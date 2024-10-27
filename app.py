from flask import Flask, request, jsonify

app = Flask(__name__)

# Route to handle data POSTed by ESP8266
@app.route('/upload', methods=['POST'])
def upload_data():
    data = request.json  # ESP8266 could send JSON data
    print(f"Received data: {data}")
    return jsonify({"status": "Data received"}), 200

# Web interface to display data (could be a dashboard)
@app.route('/')
def dashboard():
    return "<h1>Landslide Prediction Dashboard</h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
