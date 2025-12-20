import type { NextConfig } from "next";
import dotenv from "dotenv";
import path from "path";

if (process.env.VERCEL !== "1") {
  const rootEnvPath = path.resolve(__dirname, "../../.env");
  dotenv.config({ path: rootEnvPath });
  console.log("🔹 ENV načteno z rootu");
} else {
  console.warn("⚠️ Root .env nebyl nalezen");
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
