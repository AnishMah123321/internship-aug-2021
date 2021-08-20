
export const fetchData1 = async() => {
    let data = await fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
  //console.log(data.data);
  return data.data;
  }

  export const fetchData2 = async() => {
    let data = await fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
  //console.log(data.data);
  return data.data;
  }

  export const deleteFromApi = async(name) => {
    await deleteFromApi1(name);
    await deleteFromApi2(name);
  }
  export const deleteFromApi1 = async(name) => {
    fetch('https://reqres.in/api/users?page=1', {
      method : 'DELETE'
    })
    .then (res => res.json())
    .then (data => {
        
    })
    .catch(err => console.log('error'));
  }
  export const deleteFromApi2 = async(name) => {
    fetch('https://reqres.in/api/users?page=2', {
      method : 'DELETE'
    })
    .then (res => res.json())
    .then (data => {

    })
    .catch(err => console.log('error'));
  }

  export const addDataInFetch = async (opts) => {
    
    fetch('https://reqres.in/api/users?page=1', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Data Added:', opts);
    });
  }