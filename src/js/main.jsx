// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Intro from "./1_Intro";
import ParticlesTube from "./2_Particle_tube";
import "../index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
  </StrictMode>
);
