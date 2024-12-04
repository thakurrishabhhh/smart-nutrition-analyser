from flask import Flask,render_template, request, jsonify
import pandas as pd
import os

app = Flask(__name__)

# Load CSV data
csv_file = 'nutrients_csvfile.csv'
data = pd.read_csv(csv_file)

data.to_html("data_html.html")

@app.route('/')
def home():
    return render_template('lxm.html')


@app.route('/mmf.html')
def nutriton():
    return render_template('mmf.html',Data =data)


if __name__=="__main__":
    app.run(debug=True,port=7000)