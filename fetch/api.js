import {fetchMovie} from './modules/fetch.js';

export const showMovie = async() => {
    let info = await fetchMovie()

    //console.log(info);
    for (let key in info){
        console.log(info[key]);

    }


}
showMovie();