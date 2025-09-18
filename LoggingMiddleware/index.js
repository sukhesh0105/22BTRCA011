// LoggingMiddleware/index.js
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function Log(stack, level, pkg, message, token) {
  if (!stack || !level || !pkg || !message) {
    throw new Error("All fields (stack, level, package, message) are required");
  }

  const body = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: pkg.toLowerCase(),
    message,
  };

  const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Logging failed: ${res.statusText}`);
  }

  return res.json();
}

module.exports = { Log };
