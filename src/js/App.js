import "../css/App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/j-jones-2023">
    <div className="App">
      <Header className="App-header" />
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
