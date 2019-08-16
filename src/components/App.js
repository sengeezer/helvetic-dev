import React from 'react';
import './App.css';

import NavItem from './NavItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helvetic.dev</h1>
        <nav>
          <ul>
            <NavItem link="#main" name="Nav item 1" />
            <NavItem link="#main" name="Nav item 2" />
            <NavItem link="#main" name="Nav item 3" />
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
