import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
  uv: "true",
  scramjet: "true",
  rh: "true",
});
const port = process.env.PORT || 8080;

app.use(
  express.static("public", {
    index: "index.html",
    extensions: ["html"],
  })
);

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
