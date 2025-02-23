import { useState } from "react";
import axios from "axios";

export default function App() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDebug = async () => {
    if (!code.trim()) {
      setError("Please enter some code to debug.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await axios.post("http://127.0.0.1:5000/debug", { code });
      setResponse(res.data.explanation || "No explanation provided.");
    } catch (err) {
      setError("Failed to connect to the debugging API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-400">
          AI Code Debugger
        </h1>

        <textarea
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your code here..."
          rows="6"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          className={`w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 mt-4 rounded-lg transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleDebug}
          disabled={loading}
        >
          {loading ? "Debugging..." : "Debug Code"}
        </button>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="spinner"></div>
          </div>
        )}

        {error && <p className="mt-4 text-red-400 text-center">{error}</p>}

        {response && (
          <div className="output-box">
            <h2 className="text-xl font-semibold text-green-400">Debugging Output:</h2>
            <pre className="whitespace-pre-wrap break-words text-gray-300">{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
