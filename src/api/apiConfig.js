const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '4459940ac769460b3f77c3a215aa3494',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
