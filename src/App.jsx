import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SimulatorPage from "./pages/SimulatorPage";
import GlossaryPage from "./pages/GlossaryPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/simulator" element={<SimulatorPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
