import "./Main.css";
import { useEffect, useState } from "react";
import { searchArtworks } from "../../utils/ThirdPartyApi";
import Preloader from "../Preloader/Preloader";

function Main() {
  const [artworks, setArtworks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [initialArtworks, setInitialArtworks] = useState([]);

  useEffect(() => {
    searchArtworks("van gogh")
      .then((data) => {
  console.log("Imágenes del museo:", data.map((obra) => ({
    titulo: obra.title,
    imagen: obra.primaryImageSmall,
    dominioPublico: obra.isPublicDomain,
  })));
  setInitialArtworks(data);
  setArtworks(data);
})
      .catch((error) => {
  console.error(error);
  setError("No pudimos cargar las obras. Intenta nuevamente.");
})
      .finally(() => setIsLoading(false));
  }, []);


function handleSearch(event) {
  event.preventDefault();

  setIsLoading(true);
  setError("");
  setArtworks([]);
  setVisibleCount(3);

  console.log("Estoy buscando:", searchQuery);

  searchArtworks(searchQuery.trim())
    .then((data) => {
      console.log("Resultados:", data);
      console.log("Cantidad de obras válidas:", data.length);
      setArtworks(data);
    })
    .catch((error) => {
  console.error(error);
  setError("No pudimos completar la búsqueda. Intenta nuevamente.");
})
    .finally(() => setIsLoading(false));
}

  return (
    <main className="main">
      <h2 className="main__title">Descubre nuevas obras</h2>
      <p className="main__description">
        Una galería de arte conectada con el mundo.
      </p>

{isLoading && <Preloader />}
{error && (
  <p className="main__description" role="alert">
    {error}
  </p>
)}
{!isLoading && !error && artworks.length === 0 && (
  <div className="main__empty">
    <p className="main__description">
      No encontramos obras disponibles. Intenta con otro artista.
    </p>

    <button
      type="button"
      className="main__button"
      
onClick={() => {
  setSearchQuery("");
  setVisibleCount(3);
  setArtworks(initialArtworks);
}}

    >
      Volver al inicio
    </button>
  </div>
)}
 
<div className="main__gallery">
  {artworks.slice(0, visibleCount).map((artwork) => (
    <article className="artwork" key={artwork.objectID}>
      {artwork.primaryImageSmall && (
        <img
          className="artwork__image"
          src={artwork.primaryImageSmall}
          alt={artwork.title}
        />
      )}
      <h3 className="artwork__title">{artwork.title}</h3>
      <p className="artwork__artist">
        {artwork.artistDisplayName || "Artista desconocido"}
      </p>

<form className="main__search" onSubmit={handleSearch}>
  
<input
  className="main__input"
  type="search"
  placeholder="Busca un artista o una obra..."
  aria-label="Buscar obras de arte"
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)}
  required
/>

  <button className="main__button" type="submit">
    Buscar
  </button>
</form>

    </article>
  ))}
</div>

{visibleCount < artworks.length && (
  <button
    type="button"
    className="main__button"
    onClick={() => setVisibleCount(visibleCount + 3)}
  >
    Mostrar más
  </button>
)}
    </main>
  );
}

export default Main;
