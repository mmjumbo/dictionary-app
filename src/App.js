import logo from "./logo.avif";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">
          <small>This SheCodes project is created by Maggie</small>
          </footer>
      </div>
    </div>
  );
}
