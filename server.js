import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
  uv: "true",
  scramjet: "true",
  rh: "true",
});

const port = process.env.PORT || 8080;

// --- Allow Caddy to issue TLS for all domains ---
app.get("/allow", (req, res) => {
  res.sendStatus(200); // allow all domains
});

// Serve static files
app.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  })
);

// Start ChemicalServer
app.serveChemical();

listen(port, () => {
  console.log("░██████╗░░█████╗░██╗░░░░░░█████╗░██╗░░██╗██╗░░░██╗");
  console.log("██╔════╝░██╔══██╗██║░░░░░██╔══██╗╚██╗██╔╝╚██╗░██╔╝");
  console.log("██║░░╚██╗██╔══██║██║░░░░░██╔══██║░██╔██╗░░░╚██╔╝░░");
  console.log("╚██████╔╝██║░░██║███████╗██║░░██║██╔╝╚██╗░░░██║░░░");
  console.log("░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░");
  console.log("is listening on:");
  console.log(`http://localhost:${port}`);
});
