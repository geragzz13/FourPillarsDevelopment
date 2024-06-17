from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__,
            static_folder='./build/static',
            template_folder='./build')
#app.config['SQLALCHEMY']
CORS(app)

@app.route('/')
@app.route('/<path:path>') # Catch all paths, so that the frontend handles routing
def index(path=None):
    return render_template('index.html')

@app.route('/<path:path>') # Catch all paths, so that the frontend handles routing

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message' : 'Hello, from the backend!'}
    return jsonify(data), 200

@app.route('/api/services')
def get_services():
    ...

@app.route('/api/contact', methods=['POST'])
def contact_form():
    data = request.get_json()  # Assuming form data is sent as JSON
    # Process the form data (e.g., send email, store in database)
    print('Received contact form submission:', data)
    return jsonify({'message': 'Form submission successful!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
