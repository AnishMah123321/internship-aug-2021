import {fetchMovie} from './modules/fetch.js';

export const showMovie = async() => {
    //await asd();
    let info = await fetchMovie()
    let count = 1;
    let rowId='rowId1';
    let colId='';
    let rowCount=1;
    //console.log(info);
        
    //console.log(parentSelect);
    for (let key in info){
        //console.log(info[key].id);
        
        
        if (count <4){

            //Adding Column

            let parentSelect = document.querySelector("." + CSS.escape(rowId) + "");
        //let parentSelect = document.querySelector('.rowId1');  
        //console.log(parentSelect);      
        let createSelectCol = document.createElement('div');
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
            colId='colId' + rowCount + count;
        createSelectCol.innerHTML = `
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
        createSelectCol.classList.add('col-4');
        createSelectCol.classList.add('border');
        createSelectCol.classList.add(colId);
        parentSelect.appendChild(createSelectCol);
        count=count+1;
        }
        else{

//Adding Row

            let parentSelect = document.querySelector('.movie-data');
            let createSelectRow = document.createElement('div'); 
            count=1;
            createSelectRow.innerHTML = `
       
        `
        ;
        rowCount=rowCount+1;
        rowId='rowId'+ rowCount;
        createSelectRow.classList.add('row');
        createSelectRow.classList.add('row-data');
        createSelectRow.classList.add(rowId);
        parentSelect.appendChild(createSelectRow);
        
        //Adding Column
         
        parentSelect = document.querySelector("." + CSS.escape(rowId) + "");
        //let parentSelect = document.querySelector('.rowId1');  
        //console.log(parentSelect);      
        let createSelectCol = document.createElement('div');
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
        colId='colId' + rowCount + count;
    createSelectCol.innerHTML = `
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
    createSelectCol.classList.add('col-4');
    createSelectCol.classList.add('border');
    createSelectCol.classList.add(colId);
    parentSelect.appendChild(createSelectCol);
    count=count+1;
        
        
        }
        

    }


  
  


}
  const asd = async() => {
        //console.log('printed');
    }

showMovie();