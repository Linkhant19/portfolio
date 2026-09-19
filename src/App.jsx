import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EscapeRoom from "./pages/EscapeRoom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/escape-room"
          element={<EscapeRoom />}
        />
      </Routes>
    </BrowserRouter>
  );
}