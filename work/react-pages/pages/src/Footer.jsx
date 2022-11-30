import './static/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list footer__social">
        <li><a href="/">Blog</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Shop</a></li>
      </ul>
      <ul className="footer__list footer__turtles">
        <li><a href="/">API</a></li>
        <li><a href="/">Training</a></li>
        <li><a href="/">Status</a></li>
        <li><a href="/">Security</a></li>
      </ul>
      <ul className="footer__list footer__policy">
        <li><a href="/">Terms</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Docs</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
