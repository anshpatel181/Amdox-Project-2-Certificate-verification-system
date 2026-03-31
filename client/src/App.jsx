import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Verify } from "./pages/Verify";
import { Dashboard } from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;