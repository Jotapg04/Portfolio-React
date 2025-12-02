import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Body() {

  useEffect(() => {
    const images = document.querySelectorAll(".image-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div id="about">
        <div className="about-container">
          <img src="/img/about-img.jpg" alt="about" />
          <div className="about-text">
            <p>SOBRE MI</p>
            <p>Desarrolladora & Teleco</p>
            <p>
              Hola, mi nombre es Jessica. Soy desarrolladora web junior y
              también técnica en telecomunicaciones e informática.
            </p>
            <p>
              Cuento con 2 años de experiencia en el sector y actualmente estoy
              cursando el grado superior de Desarrollo Web.
            </p>
            <a href="#contact-me">
              <button>CONTACTAME</button>
            </a>
            <a href="/img/CV.jpg">
              <button>DESCARGAR CV</button>
            </a>
          </div>
        </div>
      </div>

      <div id="equipo">
        <div className="equipo">
          <div className="equipo-text">
            <p>Equipo</p>
            <p>Calidad garantizada</p>
            <p>Los mejores proyectos con DigitalEvolution S.A</p>
          </div>

          <div className="box-container">
            <div className="box-1">
              <p className="heading">
                <strong>Jack Sparrow</strong>
              </p>
              <img src="/img/team1.jpg" alt="Jack Sparrow" />
            </div>

            <div className="box-2">
              <p className="heading">
                <strong>Harry Styles</strong>
              </p>
              <img src="/img/team2.jpg" alt="Harry Styles" />
            </div>

            <div className="box-3">
              <p className="heading">
                <strong>John Boyega</strong>
              </p>
              <img src="/img/team3.jpg" alt="John Boyega" />
            </div>

            <div className="box-4">
              <p className="heading">
                <strong>Taylor Swift</strong>
              </p>
              <img src="/img/team4.jpg" alt="Taylor Swift" />
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="portfolio">
        <div className="portfolio-text">
          <p>Portfolio</p>
          <p>Realizados hasta el momento</p>
          <p>Los mejores proyectos con DigitalEvolution S.A</p>
        </div>

        <div className="image-section">
          <div className="image-row">
            <div className="image-container">
              <img src="/img/portfolio-img1.jpg" alt="Portfolio 1" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img2.jpg" alt="Portfolio 2" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img3.jpg" alt="Portfolio 3" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img4.jpg" alt="Portfolio 4" />
            </div>
          </div>

          <div className="image-row">
            <div className="image-container">
              <img src="/img/portfolio-img5.jpg" alt="Portfolio 5" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img6.jpg" alt="Portfolio 6" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img7.jpg" alt="Portfolio 7" />
            </div>
            <div className="image-container">
              <img src="/img/portfolio-img8.jpg" alt="Portfolio 8" />
            </div>
          </div>
        </div>
      </div>

      <div id="contact-me" className="contact-me">
        <p>¿Tienes un proyecto en mente?</p>
        <span>No dudes en contactar conmigo sin ningún tipo de compromiso</span>
        <br />
        <Link to="/newsletter">
          <button>CONTACTAME</button>
        </Link>
      </div>
    </>
  );
}
