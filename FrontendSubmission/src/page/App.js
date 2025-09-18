import { useAuth } from "../hook/useAuth";
import LogForm from "../component/LogForm";

export default function App() {
  const token = useAuth();

  if (!token) return <p>Authenticating...</p>;

  return (
    <div>
      <h1>Frontend Log System</h1>
      <LogForm token={token} />
    </div>
  );
}
