#!/usr/bin/python3
from flask import Flask
from livepopulartimes import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    
    thing = get_populartimes_by_address("(H-Mart Dunbar) 5557 Dunbar Street, Vancouver BC, Canada")
    return thing
if __name__ == "__main__":
    app.run(debug=True, port=8000)