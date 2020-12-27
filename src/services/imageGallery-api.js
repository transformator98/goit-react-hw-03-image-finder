const apiKey = '18773643-f1542c573d467a3c4fb890edb';

function fetchGallery(name, page = 1) {
  const url = `https://pixabay.com/api/?q=${name}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error(`Нет картинок по запросу ${name}`));
  });
}

const api = {
  fetchGallery,
};

export default api;
