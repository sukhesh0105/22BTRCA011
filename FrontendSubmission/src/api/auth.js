import { CONFIG } from "../config/config";

export async function getAuthToken() {
  const res = await fetch(`${CONFIG.baseURL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(CONFIG.credentials),
  });

  if (!res.ok) throw new Error("Failed to authenticate");
  return res.json();
}
