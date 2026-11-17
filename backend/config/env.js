import dotenv from "dotenv";

dotenv.config();

const stripSlash = (url) => url.replace(/\/+$/, "");

export const env = {
  port: Number(process.env.PORT || 4000),
  frontendOrigin: stripSlash(
  process.env.FRONTEND_ORIGIN ||
  process.env.RENDER_EXTERNAL_URL ||
  "http://localhost:5173"
),
  roomIdleTimeoutMs: Number(process.env.ROOM_IDLE_TIMEOUT_MS || 30 * 60 * 1000),
};