from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)


LLAMA_CPP_PATH = "C:\\Users\\Bahniman Das\\llama.cpp\\build\\bin\\Release\\llama-cli.exe"
MODEL_PATH = "C:\\Users\\BAHNIM~1\\llama.cpp\\models\\MISTRA~1.GGU"

@app.route("/debug", methods=["POST"])
def debug_code():
    try:
        data = request.get_json()
        if not data or "code" not in data:
            return jsonify({"error": "Invalid request. No code provided."}), 400

        code = data["code"].strip()
        if not code:
            return jsonify({"error": "Code input is empty."}), 400

        print("🔹 Running `llama.cpp` for debugging...")


        prompt = f"Analyze and debug the following code:\n```python\n{code}\n```"

        result = subprocess.run(
            [LLAMA_CPP_PATH, "-m", MODEL_PATH, "--prompt", prompt, "--temp", "0.7", "--n_predict", "256"],
            capture_output=True,
            text=True
        )

 
        explanation = result.stdout.strip()

        print("✅ LLaMA Response:", explanation)
        return jsonify({"explanation": explanation})

    except Exception as e:
        print("❌ Internal Server Error:", str(e))
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
