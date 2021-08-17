import {fetchMovie} from './modules/fetch.js';

export const showMovie = () => {
    let info = fetchMovie();
    console.log('inapi' , info);

}
showMovie();