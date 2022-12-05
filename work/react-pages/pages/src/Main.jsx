import Home from './Home';
import About from './About';
import Turtles from './Turtles';

function Main({ page, onNav }) {

  return (
    <main>
      { (page === '/') && <Home onNav={onNav}/> }
      { (page === '/about.html') && <About/> }
      { (page === '/turtles.html') && <Turtles/> }
    </main>
  );
}

export default Main;
