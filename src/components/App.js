import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="clearFix">
        <section>
          Section 1
        </section>
        <section>
          Section 2
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
