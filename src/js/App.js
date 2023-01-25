import "../css/App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}
