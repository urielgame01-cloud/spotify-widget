// ⚠️ Para pruebas rápidas pega aquí un access token válido.
// Lo ideal es que lo obtengas desde tu backend con refresh token.
const token = 'BQCfJfkChlWZAPbptF2RPX2JMo3yyZ7V_sYXURMAjQKnPR3ZyDDV9NUBHGVExMkhk_7vqFPlZBk_V9i4j7IPH4wi8Dr96QCuHtF6JC1B_urXLz4lU3f0y7ZOgem9uFmI4jnWVPfRQETz7S6o2udoH7NbGO10M5KQRvIiJiTlZ9Vok25jiSIKVmw6Kjf2w1Kr7P0g7GIv1MYfCSfaE_YchoIJV0niUdE-iB8JNvfrdSxmcr8vuBGKvtG2kgjY07r0LzSvYsRuhpcRP9fRjc-IfpjafQdbPS-KQ7fsRRikAxDmMTodZk8';

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
