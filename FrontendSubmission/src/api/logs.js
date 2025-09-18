import { Log } from "LoggingMiddleware";
 // Import reusable logger

export async function createLog(token, logData) {
  return await Log(
    logData.stack,
    logData.level,
    logData.package,
    logData.message,
    token
  );
}
