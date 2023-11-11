import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTU1Y2VlNmY1NjljZjA4OWZkZTNmOTU0MDUxMzQ5MiIsInN1YiI6IjYzNzYzZmZhMmZhZjRkMDBkYzk5NGU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.euR5Pm2nntjwbJRm-eRrU8DKEEC_SSNYLqvueKxxfMs",
  },
});

export default api;
