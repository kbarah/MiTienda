from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {
    "kerin": "1234",
    "admin": "admin"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if users.get(username) == password:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False}), 401

if __name__ == '__main__':
    app.run(debug=True, port=5500)
