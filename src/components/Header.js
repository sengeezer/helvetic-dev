import React from 'react';

import NavItem from './NavItem';

const Header = () => (
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
);

export default Header;
