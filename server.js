const express = require("express");

const app = express();
app.disable("x-powered-by");

const PORT = Number(process.env.PORT) || 3000;

app.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "warera-assistant",
    mode: "read-only"
  });
});

app.get("/", (_req, res) => {
  res.status(200).json({
    service: "warera-assistant",
    health: "/health"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`War Era Assistant listening on port ${PORT}`);
});
