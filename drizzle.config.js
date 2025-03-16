import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_0ParE5dCFmqg@ep-dark-wind-a88i7n1b-pooler.eastus2.azure.neon.tech/Ai-Study-Material-gen-1?sslmode=require",
  },
});