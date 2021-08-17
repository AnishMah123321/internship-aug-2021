//const fetch = require('node-fetch');

// console.log(fetch ('https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers'));
// fetch ('https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers', {
//     method : 'GET',
//     headers :{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name : 'User 1'
//     })
// }).then (res => {
//     return res.json()
// })
// .then (data => console.log(data))

const loadMovie = () => {

fetch('https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers')
.then(function(response) {
  return response.json();
})
.then(function(json) {
    console.log(json);    
});
}
//loadMovie();

export const fetchMovie = () => {
 let data = loadMovie();
 console.log(data);
console.log(loadMovie());
}






