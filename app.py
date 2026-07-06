from flask import Flask, render_template, jsonify

app = Flask(__name__)

# ❤️ Patient Dataset (Backend side)
patients = [
    {"id":1, "age":45, "gender":"Male", "bp":130, "chol":230, "hr":85, "disease":"Yes"},
    {"id":2, "age":52, "gender":"Female", "bp":145, "chol":250, "hr":92, "disease":"Yes"},
    {"id":3, "age":39, "gender":"Male", "bp":120, "chol":180, "hr":75, "disease":"No"},
    {"id":4, "age":61, "gender":"Female", "bp":155, "chol":270, "hr":95, "disease":"Yes"},
    {"id":5, "age":48, "gender":"Male", "bp":125, "chol":210, "hr":80, "disease":"No"}
]

# 🌐 Home route
@app.route("/")
def home():
    return render_template("index.html")

# 📊 API route (send data to frontend)
@app.route("/api/patients")
def get_patients():
    return jsonify(patients)

# 📈 Analytics API
@app.route("/api/analytics")
def analytics():

    total = len(patients)
    yes = len([p for p in patients if p["disease"] == "Yes"])
    no = total - yes

    avg_age = sum(p["age"] for p in patients) / total
    avg_bp = sum(p["bp"] for p in patients) / total
    avg_chol = sum(p["chol"] for p in patients) / total

    return jsonify({
        "total": total,
        "diseaseYes": yes,
        "diseaseNo": no,
        "avgAge": round(avg_age,2),
        "avgBP": round(avg_bp,2),
        "avgChol": round(avg_chol,2)
    })

# 🚀 Run server
if __name__ == "__main__":
    app.run(debug=True)