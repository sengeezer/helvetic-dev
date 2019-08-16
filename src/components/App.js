import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helvetic.dev</h1>
        <nav>
          <ul>
            <li><a href="#main">Nav item 1</a></li>
            <li><a href="#main">Nav item 2</a></li>
            <li><a href="#main">Nav item 3</a></li>
          </ul>
        </nav>
      </header>
      <main className="clearFix">
        <section>
          Section 1
        </section>
        <section>
          Section 2
        </section>
      </main>
      <footer>
        <p>
            &copy; 2019 F.M. Albertin
        </p>
      </footer>
    </div>
  );
}

export default App;
