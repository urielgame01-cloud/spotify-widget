// ⚠️ Para pruebas rápidas pega aquí un access token válido.
// Lo ideal es que lo obtengas desde tu backend con refresh token.
const token = "TU_ACCESS_TOKEN";

async function getSong() {
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status === 200) {
    const data = await response.json();
    document.getElementById("album-cover").src = data.item.album.images[0].url;
    document.getElementById("song-title").innerText = data.item.name;
    document.getElementById("artist-name").innerText = data.item.artists.map(a => a.name).join(", ");
  }
}

setInterval(getSong, 5000);
