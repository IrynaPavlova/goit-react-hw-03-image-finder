import axios from "axios";

const baseUrl = "https://pixabay.com/api/";
const key = "14472028-808bc64ad5a80955cde6e6aeb";

export const fetchImages = (value, page) => {
  const requestParams = `?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=`;
  return axios.get(baseUrl + requestParams + key);
};
