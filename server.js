import { ChemicalServer } from "chemicaljs";
import express from "express";

const [app, listen] = new ChemicalServer({
    default: "scramjet", 
    uv: "true",
    scramjet: "true",
    rh: "false",
});
const port = process.env.PORT || 3000;

app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));


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