import logo from "./logo.svg";
import "./App.css";
import photo from "./photo.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Praktikum React</h1>
        </div>
      </nav>
      <main>
        <header className="App-header">
          <img src={photo} className="App-Photo" alt="Gambar" />
          <h2>Welcome to Praktikum React</h2>
          <p>
            Ini adalah hasil Praktikum React
            <br />{"untuk belajar lebih lanjut, klik link di bawah"}
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&pp=ygUIcmVhY3QganM%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React by Youtube
          </a>
        </header>
      </main>
      <footer className="App-footer">
        Jodi Nur Farkhani - Pengembangan Desain website
        <br />
        &copy; 2024
      </footer>
    </div>
  );
}

export default App;
