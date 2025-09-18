import { useState } from "react";
import { createLog } from "../api/logs";

export default function LogForm({ token }) {
  const [logData, setLogData] = useState({
    stack: "backend",
    level: "error",
    package: "handler",
    message: "",
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setLogData({ ...logData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createLog(token, logData);
      setResponse(res.message);
    } catch (err) {
      setResponse("Failed to create log");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          placeholder="Enter log message"
          value={logData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit Log</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
