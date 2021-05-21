import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export const postform = axios.create({
  baseURL: "https://webhook.site/1c316c54-24ee-4268-87b4-71333572993a/",
});

