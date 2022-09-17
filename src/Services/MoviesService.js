import axios from 'axios';
import {DB_API_KEY, DB_BASE_URL} from '../env';

export const getMovies = async title => {
  const options = {
    params: {apiKey: DB_API_KEY, s: title, plot: 'full', type: 'movie'},
  };
  return await axios
    .get(DB_BASE_URL, options)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};
