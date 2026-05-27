import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4173;

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.post("/api/contact", (req, res) => {
  const { name, email, projectType, message } = req.body ?? {};

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, project type, and message are required."
    });
  }

  return res.status(202).json({
    ok: true,
    message: "Inquiry received. AetherNova will respond within one business day."
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`AetherNova server listening on http://localhost:${port}`);
});
