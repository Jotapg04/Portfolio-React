import "../css/newsletter.css";

export default function Newsletter() {
  return (
    <div id="newsletter">
      <header>
        <h1>¡Bienvenido a DigitalEvolution!</h1>
        <p>¡Tu transformación digital comienza ahora!</p>
        <img src="/img/portfolio-img4.jpg" alt="Newsletter" />
      </header>

      <div className="content">
        <article>
          <p>
            Felicidades por elegir DigitalEvolution para llevar a tu empresa al
            siguiente nivel. Estamos emocionados de ser parte de tu viaje hacia
            el éxito digital.
          </p>

          <p>Nuestros servicios incluyen:</p>

          <ul>
            <li>- Desarrollo de Aplicaciones Web y Móviles</li>
            <li>- Consultoría en Transformación Digital</li>
            <li>- Optimización de Procesos Empresariales</li>
            <li>- Seguridad Informática</li>
          </ul>

          <p>
            Estamos comprometidos a proporcionarte soluciones innovadoras y
            personalizadas que impulsen el crecimiento y la eficiencia de tu
            empresa.
          </p>

          <p>
            Si tienes alguna pregunta o necesitas más información, no dudes en
            ponerte en contacto con nosotros.
          </p>

          <a className="button" href="#contact-me">
            Contactar Ahora
          </a>
        </article>
      </div>

      <div className="footer">
        <p>
          Este correo electrónico fue enviado por DigitalEvolution. Si no deseas
          recibir más correos, puedes <a href="#">darte de baja</a>.
        </p>

        <p>DigitalEvolution S.A</p>
        <p>Hecho a tu medida. Garantía de satisfacción</p>

        <div className="social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}
