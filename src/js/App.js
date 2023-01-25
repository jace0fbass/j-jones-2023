import "../css/App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header /> 
      </header>
       <Portfolio />
      <div>
       <Contact />
       </div>
    </div>
  );
}
