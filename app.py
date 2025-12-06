"""
Professor Jacksons Compliment generator - Flask Web Application
Main Flask app that handles routes and renders the web interface.
"""

from flask import Flask, render_template, request, jsonify
from compliments import generate_compliment

app = Flask(__name__)


@app.route('/')
def index():
    """Main route - renders the home page"""
    return render_template('index.html')


@app.route('/generate', methods=['POST'])
def generate():
    """Route that handles form submission and returns compliment"""
    # Get data from the request
    name = request.form.get('name', '').strip()
    style = request.form.get('style', 'funny')
    
    # Validate inputs
    if not name:
        return jsonify({'error': 'Please enter a name'}), 400
    
    if style not in ['funny', 'sweet', 'hype']:
        return jsonify({'error': 'Invalid style selected'}), 400
    
    # Generate compliment using the compliments module
    compliment = generate_compliment(name, style)
    
    # Return the compliment as JSON
    return jsonify({'compliment': compliment})


if __name__ == '__main__':
    app.run(debug=True)

