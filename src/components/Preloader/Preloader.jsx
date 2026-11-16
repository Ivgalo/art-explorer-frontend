import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Cargando obras">
      <div className="preloader__spinner"></div>
      <p className="preloader__text">Cargando obras... 🎨</p>
    </div>
  );
}

export default Preloader;