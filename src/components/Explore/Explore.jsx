import { useEffect, useState } from "react";
import { searchArtworks } from "../../utils/ThirdPartyApi";
import Preloader from "../Preloader/Preloader";

function Explore() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    searchArtworks("van gogh")
      .then((data) => {
        setArtworks(data);
      })
      .catch(() => {
        setError("No pudimos cargar las obras.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="main">
      <h2 className="main__title">Explora el museo</h2>

      <p className="main__description">
        Descubre obras de diferentes artistas y épocas.
      </p>

      {isLoading && <Preloader />}

      {error && <p role="alert">{error}</p>}

      {!isLoading && !error && artworks.length === 0 && (
        <p className="main__description">
          No encontramos obras para mostrar.
        </p>
      )}

      <div className="main__grid">
        {artworks.map((artwork) => (
          <article className="main__card" key={artwork.objectID}>
            <img
              className="main__image"
              src={artwork.primaryImageSmall}
              alt={artwork.title}
            />
            <h3>{artwork.title}</h3>
            <p>{artwork.artistDisplayName || "Artista desconocido"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Explore;
