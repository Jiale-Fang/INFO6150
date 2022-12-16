import '../static/css/css-gg.css'
import '../static/css/GlobalNav.css'
import { useState } from 'react';
import menu from "../static/js/menu";


function GlobalNav({ className, onNav }) {
  const [showMenu, setShowMenu] = useState(false);
  const list = menu.map(item => {
    return (
      item.hasSubItem ?
        <ul className="global-nav-menu" key={item.name}>
          <li className="menu-item" key={item.name}><a className="header-link" href="index.html" aria-label={`${item.name} in nav bar`}>{item.name}</a>
            <ul>
              <li key={item.children[0].name} aria-label='Dropdown item' ><a className="menu-item-dropdown" onClick={onNav} href={item.children[0].path}>{item.children[0].name}</a></li>
              <li key={item.children[1].name} aria-label='Dropdown item'><a className="menu-item-dropdown" onClick={onNav} href={item.children[1].path}>{item.children[1].name}</a></li>
              <li key={item.children[2].name} aria-label='Dropdown item'><a className="menu-item-dropdown" onClick={onNav} href={item.children[2].path}>{item.children[2].name}</a></li>
            </ul>
          </li>
        </ul>
        :
        <li className="global-nav-item" key={item.name} aria-label={`${item.name} in nav bar`}>
          <a
            className="global-nav-link"
            href={item.path}
            onClick={onNav}
          >
            {item.name}
          </a>
        </li>
    );
  });

  const showClass = showMenu ? 'global-nav-list--open' : 'global-nav-list';

  return (
    <nav className={`global-nav ${className}`}>
      <button className='global-nav-button'
        onClick={() => {
          setShowMenu(!showMenu)
        }}
        aria-label={showMenu ? "Close Menu" : "Open Menu"}
      >
        {showMenu ? <i className='gg-close-o' aria-label='Close button of the menu' /> : <i className='gg-menu' aria-label='Open button of the menu' />}
      </button>
      <ul className={`${showClass}`}>
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;
