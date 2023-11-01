export async function getMovies() {
  const res = await fetch("https://api.nomoreparties.co/beatfilm-movies");
  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    throw new Error("произошла ошибка");
  }
}
