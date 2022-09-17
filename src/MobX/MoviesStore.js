import {observable, action} from 'mobx';

class MoviesStore {
  @observable movies;

  constructor(value) {
    this.movies = [];
  }

  @action setMovies = movies => {
    this.movies = movies;
  };
}

const moviesStore = new MoviesStore();
export default moviesStore;
