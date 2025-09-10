import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Newsletters from "./files/Newsletters";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Newsletters />
  </StrictMode>
);
