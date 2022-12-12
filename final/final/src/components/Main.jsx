import Home from './Home';
import About from './About';
import Album from './Album';
import '../static/css/Main.css'
import JavaLearningDetail from './JavaLearningDetail'
import ReactLearningDetail from './ReactLearningDetail'
import AlgorithmLearningDetail from './AlgorithmLearningDetail';
function Main({ darkModeClass, page, changePage, loginFormRef, isLogin, user }) {
  return (
    <main id="main-content" className={`main ${darkModeClass}`}>
      { (page === '/') && <Home darkModeClass={darkModeClass} changePage={changePage}/> }
      { (page === '/about.html') && <About darkModeClass={darkModeClass}/> }
      { (page === '/album.html') && <Album darkModeClass={darkModeClass}/> }
      { (page === '/javaLearning.html') && <JavaLearningDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
      { (page === '/reactLearning.html') && <ReactLearningDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
      { (page === '/algorithmLearning.html') && <AlgorithmLearningDetail darkModeClass={darkModeClass} user={user} isLogin={isLogin} loginFormRef={loginFormRef}/> }
    </main>
  );
}

export default Main;
