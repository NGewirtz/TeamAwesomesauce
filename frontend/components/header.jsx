import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={`${window.logo}`} />
      </header>
    );
  }
}

export default Header;
