const getPoster = (film) => {
  const baseUrl = "https://image.tmdb.org/t/p";
  const fileSize = "/w300";
  const filePath = film.poster_path;

  return baseUrl + fileSize + filePath;
};

export default getPoster;
