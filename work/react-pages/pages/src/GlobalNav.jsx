import './static/css/css-gg.css'
import './static/css/GlobalNav.css'
import { useState } from 'react';
import menu from "./menu";


function GlobalNav({ className, onNav }) {
  const [showMenu, setShowMenu] = useState(false);
  const list = menu.map(item => {
    return (
      <li className="global-nav__item" key={item.name}>
        <a 
        className="global-nav__link" 
        href={item.path}
        onClick= { onNav }
        >
          {item.name}
        </a>
      </li>
    );
  });

  const showClass = showMenu ? 'global-nav__list--open' : '';

  return (
    <nav className={`global-nav ${className}`}>
      <button className='global-nav__button'
        onClick={() => {
          setShowMenu(!showMenu)
        }}
        aria-label={showMenu ? "Close Menu" : "Open Menu"}
        ><i className='gg-menu' /></button>
        <ul className={`global-nav__list ${showClass}`}>
          {list}
        </ul>
    </nav>
  );
}

export default GlobalNav;
