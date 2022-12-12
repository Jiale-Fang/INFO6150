import '../static/css/Header.css'
import GlobalNav from './GlobalNav';
import Logo from '../static/images/logo.jpeg'
import UserAvatar from '../static/images/avatar3.jpeg'
function Header({ onNav, isLogin, user, loginFormRef }) {

  function loginBtn() {
    return (
      <div className='header-login'>
        <button className='header-login-btn' type='button' aria-label='Login button' onClick={() => loginFormRef.current.showModal()}>login</button>
      </div>
    )
  }

  function userInfo() {
    return (
      <div className='header-user' aria-label='username'>
        <div aria-label='Your username'>{user['username']}</div>
        <img
          src={UserAvatar}
          className="header-user-avatar"
          alt="Login user avatar"
        />
      </div>
    )
  }

  return (
    <header className="header">
      <img
        src={Logo}
        className="header-logo"
        alt="Blog Logo"
        aria-label='Header logo'
      />
      <h1 className="header-title" aria-label='Header title'>
        Tcefrep's Blog
      </h1>
      {isLogin ? userInfo() : loginBtn()}
      <GlobalNav onNav={onNav} className="header-nav" />
    </header>
  );
}
export default Header;