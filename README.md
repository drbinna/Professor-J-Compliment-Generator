# Professor Jacksons Compliment generator

A sleek black and white web app built with Python Flask that generates random compliments with text-to-speech functionality.

**Live Demo:** https://professor-j-compliment-generator.vercel.app/

---

## Project Overview

This web application asks the user for a name, lets them choose a compliment style (funny, sweet, or hype), and generates a random compliment. The compliment is displayed in a minimal black/white UI and can be read aloud using text-to-speech.

---

## Features

| Feature | Description |
|---------|-------------|
| **Variables** | Stores user name, style choice, and generated compliments |
| **Conditionals** | Different compliment generation based on selected style |
| **Loops** | Loops through lists to build random compliments |
| **Functions** | Modular functions for each task (generate, display, speak) |
| **Lists/Dictionaries** | Stores adjectives, nouns, and phrases for compliment building |
| **Text-to-Speech** | Reads compliments aloud using Web Speech API |
| **Minimal UI** | Clean black and white design with Lineicons |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Python | Backend logic (variables, functions, loops, conditionals) |
| Flask | Python web framework |
| HTML | Page structure |
| CSS | Black & white styling |
| Lineicons | UI icons |
| Web Speech API | Text-to-speech (minimal JavaScript for this only) |

---

## Requirements

- Python 3.7 or higher
- Flask library

---

## Installation

### Step 1: Create Project Folder

Create a new folder called `compliment_generator`

### Step 2: Install Python

Make sure Python is installed. Check by running:

```bash
python --version
```

### Step 3: Install Flask

Open terminal in Cursor (View > Terminal) and run:

```bash
pip install flask
```

If that doesn't work, try:

```bash
pip3 install flask
```

---

## UI Requirements

### Color Palette

| Element | Color |
|---------|-------|
| Background | `#FFFFFF` (white) |
| Text | `#000000` (black) |
| Buttons | `#000000` background, `#FFFFFF` text |
| Borders | `#000000` solid |
| Hover States | Inverted (white bg, black text) |

### Typography

| Element | Font |
|---------|------|
| Headings | `'Courier New', monospace` |
| Body Text | `'Arial', sans-serif` |
| Compliment Display | `'Georgia', serif` |

### Design Principles

- Minimal and clean
- High contrast (black on white)
- No colors other than black and white
- Subtle hover animations
- Clear visual hierarchy

---

## Lineicons Setup

### CDN Link (add to HTML head)

```html
<link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
```

### Icons Used

| Purpose | Icon Class | Preview |
|---------|------------|---------|
| Header decoration | `lni lni-heart` | ♡ |
| Generate button | `lni lni-star` | ★ |
| Speak button | `lni lni-volume` | 🔊 |
| Funny style | `lni lni-emoji-happy` | 😄 |
| Sweet style | `lni lni-heart-filled` | ❤ |
| Hype style | `lni lni-fire` | 🔥 |

### Icon Usage Example

```html
<i class="lni lni-heart"></i>
<i class="lni lni-star"></i>
<i class="lni lni-volume"></i>
```

---

## Page Layout

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              ♡ COMPLIMENT GENERATOR ♡                │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│    ┌──────────────────────────────────────────┐      │
│    │  Enter a name...                         │      │
│    └──────────────────────────────────────────┘      │
│                                                      │
│    Choose a style:                                   │
│                                                      │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│    │ 😄 Funny │  │ ❤ Sweet  │  │ 🔥 Hype  │         │
│    └──────────┘  └──────────┘  └──────────┘         │
│                                                      │
│              ┌──────────────────┐                    │
│              │  ★ GENERATE ★    │                    │
│              └──────────────────┘                    │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│    ╔══════════════════════════════════════════╗      │
│    ║                                          ║      │
│    ║    "Your compliment appears here!"       ║      │
│    ║                                          ║      │
│    ╚══════════════════════════════════════════╝      │
│                                                      │
│              ┌──────────────────┐                    │
│              │  🔊 SPEAK        │                    │
│              └──────────────────┘                    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## File Structure

```
compliment_generator/
│
├── app.py                  # Main Python Flask application
├── compliments.py          # Compliment data and generation logic
├── requirements.txt        # Python dependencies
├── README.md               # This documentation file
│
├── templates/
│   └── index.html          # HTML page structure
│
└── static/
    ├── style.css           # Black and white styling
    └── script.js           # Text-to-speech only (minimal)
```

---

## Python Functions (in app.py)

| Function | Purpose |
|----------|---------|
| `index()` | Main route - renders the home page |
| `generate()` | Route that handles form submission and returns compliment |

---

## Python Functions (in compliments.py)

| Function | Purpose |
|----------|---------|
| `get_random_item(items)` | Returns a random item from a list |
| `generate_compliment(name, style)` | Creates a random compliment based on inputs |
| `get_adjective(style)` | Returns random adjective for given style |
| `get_noun(style)` | Returns random noun for given style |
| `get_template(style)` | Returns random template for given style |

---

## Data Structures (in compliments.py)

### Compliment Word Lists (Lists)

```python
# Example structure
funny_adjectives = ["ridiculously", "hilariously", "suspiciously"]
sweet_adjectives = ["genuinely", "incredibly", "wonderfully"]
hype_adjectives = ["absolutely", "insanely", "legendarily"]
```

### Compliment Templates (Dictionary)

```python
# Example structure
templates = {
    "funny": ["{name} is {adj} {noun} and everyone knows it!"],
    "sweet": ["{name}, you have the most {adj} {noun}."],
    "hype": ["{name} is {adj} {noun}! No cap!"]
}
```

---

## How to Run

### Step 1: Navigate to Project Folder

```bash
cd compliment_generator
```

### Step 2: Run the Flask App

```bash
python app.py
```

Or:

```bash
python3 app.py
```

### Step 3: Open in Browser

Go to: `http://127.0.0.1:5000`

---



### What is Flask?

Flask is a lightweight Python web framework. It lets you:

- Create web pages using Python
- Handle form submissions
- Connect Python logic to HTML pages

### Key Concepts

| Concept | Explanation |
|---------|-------------|
| **Routes** | URLs that trigger Python functions (e.g., `/` for home) |
| **Templates** | HTML files that Flask renders with Python data |
| **Static Files** | CSS, JS, images that don't change |
| **Request** | Data sent from the browser (like form inputs) |

### Basic Flask Code Explained

```python
from flask import Flask, render_template, request

app = Flask(__name__)  # Create the app

@app.route('/')  # When user visits home page
def index():
    return render_template('index.html')  # Show the HTML page

if __name__ == '__main__':
    app.run(debug=True)  # Start the server
```

---

## Features Checklist (Rubric Requirements)

| Requirement | Status | Location |
|-------------|--------|----------|
| Variables | ✅ | app.py, compliments.py |
| Conditionals (if/else) | ✅ | compliments.py |
| Loops | ✅ | compliments.py |
| Functions | ✅ | app.py, compliments.py |
| Lists/Dictionaries | ✅ | compliments.py |
| Code runs without errors | ✅ | All files |
| Output makes sense | ✅ | Browser |
| Extra feature (AI use) | ✅ | Text-to-speech |

---

## AI Disclosure

This project was created with assistance from Claude and Cursor (AI by Anthropic). The AI helped with:

- Project planning and structure
- Code generation
- UI design recommendations
- Debugging assistance

**Extra feature added due to AI use:** Text-to-speech functionality using Web Speech API

The student understands and can explain all code in this project per the video submitted

---

## Troubleshooting

### Flask not installing

Try these alternatives:

```bash
pip install flask --user
```

Or:

```bash
python -m pip install flask
```

### "Address already in use" error

Another app is using port 5000. Either:

- Close the other app
- Change the port in app.py: `app.run(debug=True, port=5001)`

### Page not updating after code changes

- Make sure `debug=True` is set in app.py
- Hard refresh your browser (Ctrl+Shift+R)

### Template not found error

- Make sure index.html is inside the `templates` folder
- Check spelling of file names

### Text-to-speech not working

- Make sure your browser volume is on
- Try Chrome browser (best support)

---

## Video Explanation Tips



### Key Points to Mention


---

## License

This project is for educational purposes.
