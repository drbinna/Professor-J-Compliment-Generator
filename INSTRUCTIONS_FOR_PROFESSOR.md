# Instructions for Running Compliment Generator

This guide will walk you through running the Compliment Generator web application on your computer.

---

## Prerequisites

Before starting, ensure you have:

- **Python 3.7 or higher** installed on your computer
- **Internet connection** (for downloading Flask and loading Lineicons)

To check if Python is installed, open your terminal/command prompt and run:
```bash
python --version
```
or
```bash
python3 --version
```

If Python is not installed, download it from [python.org](https://www.python.org/downloads/)

---

## Step 1: Navigate to the Project Folder

1. Extract/unzip the project folder if it's compressed
2. Open your terminal (Mac/Linux) or Command Prompt/PowerShell (Windows)
3. Navigate to the project directory:

```bash
cd "path/to/CSC 111 final project"
```

**Example on Mac:**
```bash
cd ~/Downloads/"CSC 111 final project"
```

**Example on Windows:**
```bash
cd C:\Users\YourName\Downloads\"CSC 111 final project"
```

---

## Step 2: Install Flask

Install the Flask library using pip:

**On Mac/Linux:**
```bash
pip3 install flask
```

**On Windows:**
```bash
pip install flask
```

If you encounter permission errors, try:
```bash
pip install flask --user
```

Wait for the installation to complete. You should see "Successfully installed flask" when done.

---

## Step 3: Verify Project Structure

Make sure your project folder contains these files and folders:

```
CSC 111 final project/
├── app.py
├── compliments.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```

---

## Step 4: Run the Application

Start the Flask web server by running:

**On Mac/Linux:**
```bash
python3 app.py
```

**On Windows:**
```bash
python app.py
```

You should see output similar to:
```
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

**Keep this terminal window open** - closing it will stop the server.

---

## Step 5: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, or Edge)
2. Navigate to: **http://127.0.0.1:5000**
   - Or alternatively: **http://localhost:5000**

You should see the Compliment Generator interface with:
- A black and white design
- A text input field for names
- Three style buttons (Funny, Sweet, Hype)
- A Generate button

---

## Step 6: Test the Application

1. Enter a name in the text field (e.g., "Alice")
2. Select a compliment style (Funny, Sweet, or Hype)
3. Click the "GENERATE" button
4. A compliment should appear in the display box
5. Click the "SPEAK" button to hear the compliment read aloud

---

## Stopping the Application

To stop the server:
1. Go back to the terminal window
2. Press **CTRL + C** (or CMD + C on Mac)
3. The server will stop and you'll return to the command prompt

---

## Troubleshooting

### "Python not found" or "python: command not found"
- Make sure Python is installed
- Try using `python3` instead of `python` (Mac/Linux)
- On Windows, make sure Python is added to your PATH during installation

### "Flask not found" or "ModuleNotFoundError: No module named 'flask'"
- Make sure you ran `pip install flask` successfully
- Try: `pip3 install flask` (Mac/Linux) or `python -m pip install flask` (Windows)

### "Address already in use" error
- Another application is using port 5000
- Close any other Flask applications
- Or change the port in `app.py` line 40 to: `app.run(debug=True, port=5001)`
- Then access at: `http://127.0.0.1:5001`

### "Template not found" error
- Make sure the `templates` folder exists and contains `index.html`
- Check that you're running the app from the correct directory (the one containing `app.py`)

### Text-to-speech not working
- Make sure your browser volume is turned on
- Try using Chrome or Edge browser (best Web Speech API support)
- Some browsers require user interaction before allowing speech

### Page shows "Internal Server Error"
- Check the terminal for error messages
- Make sure all files are present in the correct folders
- Verify Python version is 3.7 or higher

---

## Project Features to Review

When testing, please note these features:

✅ **Variables** - Name and style are stored as variables  
✅ **Conditionals** - Different compliments based on style selection (if/else)  
✅ **Loops** - Loops through lists and replaces placeholders  
✅ **Functions** - Modular functions in app.py and compliments.py  
✅ **Lists/Dictionaries** - Stores adjectives, nouns, and templates  
✅ **Text-to-Speech** - Extra feature using Web Speech API  

---

## Need Help?

If you encounter any issues not covered here:
1. Check the terminal output for error messages
2. Verify all files are in the correct locations
3. Ensure Python 3.7+ and Flask are properly installed

---

## Quick Reference

**Start the app:**
```bash
python3 app.py    # Mac/Linux
python app.py     # Windows
```

**Access in browser:**
```
http://127.0.0.1:5000
```

**Stop the app:**
Press `CTRL + C` in the terminal

---

Thank you for reviewing this project professor !

