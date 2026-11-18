
const BASE_URL = "/museum-api/public/collection";

export async function searchArtworks(query) {
  const params = new URLSearchParams({
    q: query,
    hasImages: "true",
    limit: "9",
    offset: "0",
  });
  
  const response = await fetch(
    `${BASE_URL}/v1.1/search?${params}`
  );

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const result = await response.json();

  
  const results = await Promise.allSettled(
    (result.objectIDs ?? []).map(async (id) => {
      const response = await fetch(
        `${BASE_URL}/v1/objects/${id}`
      );

      if (!response.ok) {
        throw new Error(`Error al consultar la obra ${id}`);
      }

      return response.json();
    })
  );

  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter(
  (artwork) => artwork.isPublicDomain && artwork.primaryImageSmall
);
}
