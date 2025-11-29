export default function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="logo">
          DigitalEvolution
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#about">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a href="#contact-me">CONTACTO</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#equipo">EQUIPO</a>
          </li>
        </ul>
        <div className="toggle"></div>
      </nav>
      <div className="text-container">
        <p>Bienvenidos a</p>
        <p>DigitalEvolution</p>
        <p>
          Mi nombre es Jessica, soy Técnica en Teleco <br /> & Desarrolladora
          web
        </p>
        <a href="#contact-me">
          <button className="hire-btn">CONTACTAME</button>
        </a>
        <a href="/img/CV.jpg">
          <button className="down-cv">DESCARGAR CV</button>
        </a>
      </div>
      <img alt="model" className="model" src="/img/Imagen (8).jpg" />
    </header>
  );
}
