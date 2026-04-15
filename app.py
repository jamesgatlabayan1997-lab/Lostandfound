from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# Function to connect to database
def get_db_connection():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/", methods=["GET", "POST"])
def home():
    name = ""
    if request.method == "POST":
        name = request.form.get("name")

        if name:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO users (name) VALUES (?)", (name,))
            conn.commit()
            conn.close()

    return render_template("Homepage.html", name=name)

@app.route("/about1")
def about():
    return render_template("aboutus.html")

if __name__ == "__main__":
    app.run(debug=True)


# register
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def register():
    return render_template("register.html")

if __name__ == "__main__":
    app.run(debug=True)