import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Books } from "./components/Books.jsx";
import { Hotels } from "./components/Hotels.jsx";
import { Landing } from "./components/Landing.jsx";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/hotels",
    element: <Hotels />,
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </StrictMode>
);
