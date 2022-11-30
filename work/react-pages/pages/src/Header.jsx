import './static/css/Header.css'
import GlobalNav from './GlobalNav';
import TurtleLogo from './static/images/logo.jpeg'

function Header({ onNav }) {
  return (
    <header className="header">
      <img
        src={TurtleLogo}
        className="header__logo"
        alt="Turtle Logo"
      />
      <h1 className="header__title">
        Turtles on the Internet
      </h1>
      <GlobalNav onNav={onNav} className="header__nav" />
    </header>
  );
}
export default Header;