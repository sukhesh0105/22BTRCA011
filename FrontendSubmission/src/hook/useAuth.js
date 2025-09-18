import { useEffect, useState } from "react";
import { getAuthToken } from "../api/auth";

export function useAuth() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const data = await getAuthToken();
        setToken(data.access_token);
      } catch (err) {
        console.error(err);
      }
    }
    fetchToken();
  }, []);

  return token;
}
