import './static/css/App.css';
import { useState, useRef } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import LoginModal from './components/LoginModal';
function App() {
  const [page, setPage] = useState('/');
  const [theme, setTheme] = useState('light');
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})
  const loginFormRef = useRef(null);
  const darkModeClass = theme === 'dark' ? 'dark' : '';

  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="app">
      <Header onNav={onNav} isLogin={isLogin} user={user} loginFormRef={loginFormRef} />
      <a href="#main-content" tabIndex='1' className="skip-link" aria-label="Click here to skip to main content">Skip to main content</a>
      <Main darkModeClass={darkModeClass} page={page} user={user} isLogin={isLogin} loginFormRef={loginFormRef} changePage={changePage} />
      <LoginModal loginFormRef={loginFormRef} setIsLogin={setIsLogin} setUser={setUser} />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme}/>
      <Footer />
    </div>
  );
}

export default App;
