from flask import Flask, jsonify, render_template

app = Flask(__name__,
            static_folder='./build/static',
            template_folder='./build')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/testimonials')
def get_testimonials():
    ...

@app.route('/api/services')
def get_services():
    ...

if __name__ == '__main__':
    app.run(debug=True)
