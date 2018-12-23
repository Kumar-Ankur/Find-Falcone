import React, { Component } from "react";
import styles from '../../sass/main.scss';
import Logo from '../../img/Logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={ Logo } alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="text-primary">
            <span className="text-primary--main">Falcone</span>
            <span className="text-primary--sub">just start the game</span>
          </h1>
          <a href="#" className="btn btn--animated btn--white">
            Let'start
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
