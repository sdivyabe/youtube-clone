from flask import Flask, render_template, request, redirect, url_for
import sqlite3 as sql

app = Flask(__name__)

@app.route('/')
def home():
    conn=sql.connect('utubeclone.db')
    conn.row_factory=sql.Row
    cur=conn.cursor()         
    cur.execute("select * from videos")
    data=cur.fetchall()
    return render_template("index.html",datas=data)

@app.route('/add_channel', methods=["GET","POST"])
def add_channel():
    if request.method == "POST":
        url=request.form['link']
        conn = sql.connect("utubeclone.db")
        cur = conn.cursor() 
        cur.execute("insert into videos(URL) values(?) ",(url,))
        conn.commit()
        return redirect(url_for("home"))
    return render_template("add_channel.html")

@app.route('/delete_channel/<string:id>', methods=['GET','POST'])
def delete_channel(id):
    conn=sql.connect('utubeclone.db')
    cur=conn.cursor()
    cur.execute(" delete from  videos where ID=?",(id,))
    conn.commit()
    return redirect(url_for('home'))

@app.route("/videoplayer/<string:id>")
def videoplayer(id):
    conn=sql.connect("utubeclone.db")
    cur=conn.cursor()
    cur.execute(" select URL from  videos where ID=?",(id,))
    data=cur.fetchone()
    conn.commit()
    print("data",data[0],"id",id)
    return render_template("videoplayer.html",datas=data)

if __name__=="__main__":
  app.run(debug=True)

