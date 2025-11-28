import { useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  async function callBackend() {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL);
    const data = await res.json();
    setBackendMessage(data.message);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Frontend is working!</h1>
      <button onClick={callBackend}>Call Backend API</button>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;
