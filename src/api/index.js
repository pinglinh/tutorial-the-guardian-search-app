import { API_KEY } from "../../config";

const fetchArticles = event => {
  return fetch(
    `http://content.guardianapis.com/search?q=${event}&api-key=${API_KEY}`
  ).then(response => response.json());
};

export default fetchArticles;
