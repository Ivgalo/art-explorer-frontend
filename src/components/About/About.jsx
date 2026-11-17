import { Link } from "react-router-dom";


function About() {
  return (
    <section className="main">
      <h2 className="main__title">Acerca de Art Explorer</h2>

      <p className="main__description">
        Art Explorer es una aplicación para descubrir
        obras de arte y explorar colecciones de museos
        a través de una API pública.
      </p>
      <p className="main__description">
  Proyecto desarrollado por Iván Garduño como parte
  de su formación en desarrollo web. Construido con
  React, JavaScript y una API pública de arte.
</p>
      <Link to="/" className="main__button">
  Volver a la galería
</Link>
    </section>
  );
}

export default About;
