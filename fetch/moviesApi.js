import {fetchMovie} from './modules/fetch.js';

export const showMovie = async() => {
    let info = await fetchMovie()
    let count = 0;
    //console.log(info);
        
    //console.log(parentSelect);
    for (let key in info){
        //console.log(info[key].id);
        let parentSelect = document.querySelector('.row-data');
        //.log(parentSelect);
        let createSelect = document.createElement('div');
        let backdropPath="";
        let posterPath="";

        if (info[key].backdrop_path == null){
            
        }
        else{
            backdropPath='<center><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+info[key].backdrop_path+'" class="img-thumbnail" alt="..." style="max-height:300px;"></center><br>';
        }
        if (info[key].poster_path == null){
            
        }
        else{
            posterPath='<center><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+info[key].poster_path+'" class="img-thumbnail" alt="..." style="max-height:300px;"></center><br>';
        }
        if (count <3){
        createSelect.innerHTML = `
        ${backdropPath}
        ${posterPath}
        <b>Key:</b>${info[key].adult}<br>
        <b>Language:</b>${info[key].original_language}<br>
        <b>Original title:</b>${info[key].original_title}<br>
        <b>Overview:</b>${info[key].overview}<br>
        <b>Popularity:</b>${info[key].popularity}<br>
        <b>Release date:</b>${info[key].release_date}<br>
        <b>Title:</b>${info[key].title}<br>
        <b>Video:</b>${info[key].video}<br>
        <b>Vote average:</b>${info[key].vote_average}<br>
        <b>Vote count:</b>${info[key].vote_count}<br>     
        `
        ;
        createSelect.classList.add('col-4');
        createSelect.classList.add('border');
        parentSelect.appendChild(createSelect);
        count=count+1;
        }
        else{
            let parentSelect = document.querySelector('.movie-data');
            let createSelect = document.createElement('div'); 
            count=0;
            createSelect.innerHTML = `
       
        `
        ;
        createSelect.classList.add('row');
        createSelect.classList.add('row-data');
        parentSelect.appendChild(createSelect);

        }
        

    }
    


}
showMovie();