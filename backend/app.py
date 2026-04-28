from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/content', methods=['GET'])
def get_content():
    return jsonify({
        "organization": "Har Hath Kalam",
        "vision": "From Streets to Stories of Change",
        "primary_color": "#002B5B",
        "secondary_color": "#FFD700"
    })

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)