import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RoomProvider from "./context/RoomContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RoomProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </RoomProvider> */}
  </React.StrictMode>
);
