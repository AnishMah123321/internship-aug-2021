import {fetchData1 , fetchData2,deleteFromApi} from './fetch.js';

let tempdata =[];
let data=[];
let pageNo=1;
let pageCount=4;
let idSort=0;

//let editNodeData;
export const allData = async(data0) => {
    //console.log(data0);
    if(data0 == undefined){
        let data1 = await fetchData1();
        let data2 = await fetchData2();
        //console.log(data1);
        //console.log(data1, data2);
        data = [].concat(tempdata,data1, data2);
       //console.log(data);
        return data;
    }
    else{
        //console.log(data0[0].id);
        let data1 = await fetchData1();
        let data2 = await fetchData2();
        // //console.log(data1);
        // //console.log(data1, data2);
        tempdata = [].concat(data0,tempdata)
        data = [].concat(tempdata,data1, data2);
       
        //console.log(data);
        // return data;
        if (pageNo==1){
        let tbody = document.querySelector('.dataParent0');
         let tr = document.createElement('tr');
        
         tr.innerHTML = `
         
         <th scope="row">${data0[0].id}</th>
         <td><img src="${data0[0].avatar}" style="max-width:128px; max-height:128px;"></td>
         <td>${data0[0].email}</td>
         <td>${data0[0].first_name}</td>
         <td>${data0[0].last_name}</td>
         <td>
         <button name="${data0[0].id}" class="btn btn-outline-secondary btn-sm editData${data0[0].id}">Edit</button>
         <button name="${data0[0].id}" class="btn btn-outline-secondary btn-sm deleteData${data0[0].id}">Delete</button>
         </td>
       
         `;
     tr.classList.add('dataChild');
     tr.classList.add(data0[0].id);
     tbody.prepend(tr);
     //console.log(document.querySelector('.deleteData'+ CSS.escape(data[key].id))); 
     //let dataSend='.deleteData'+data[key].id;
     document.querySelector('.editData'+CSS.escape(data0[0].id)).addEventListener('click' , editData);
     document.querySelector('.deleteData'+CSS.escape(data0[0].id)).addEventListener('click' , deleteData);
     await removeBody();
     await showFilterData();
        }
    }
    
}

export const showData = async() => {
    data = await allData();
   

    for (let key in data)
    {
      
    //console.log(data);
    let tbody = document.querySelector('.dataParent0');
         let tr = document.createElement('tr');
        
         tr.innerHTML = `
         
         <th scope="row">${data[key].id}</th>
         <td><img src="${data[key].avatar}" style="max-width:128px; max-height:128px;"></td>
         <td>${data[key].email}</td>
         <td>${data[key].first_name}</td>
         <td>${data[key].last_name}</td>
         <td>
         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm editData${data[key].id}">Edit</button>
         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm deleteData${data[key].id}">Delete</button>
         </td>
       
         `;
         tr.classList.add('dataChild');
         tr.classList.add(data[key].id);
     tbody.appendChild(tr);
     //console.log(document.querySelector('.deleteData'+ CSS.escape(data[key].id))); 
     //let dataSend='.deleteData'+data[key].id;
     document.querySelector('.editData'+CSS.escape(data[key].id)).addEventListener('click' , editData);
     document.querySelector('.deleteData'+CSS.escape(data[key].id)).addEventListener('click' , deleteData);
        
       
    } 
    
    let noPage = document.querySelector('.pageNo');
    
    
     noPage.innerHTML = `
     ${pageNo}
   
     `;
     noPage.setAttribute('name',pageNo)

      
}
export const showFilterData = async() => {
    
    let pageTest=0;
    //pageNo=document.querySelector('.pageNo').getAttribute('name');
   
   //console.log(pageNo);
    let testPage=0;
    let temppageCount=pageCount;

    //pageCount = pageCount*pageNo;
    if(pageNo != 1 ){
        //console.log(pageNo);
        testPage=pageNo-1;
        //console.log(testPage);
        pageTest=pageCount * testPage;
        console.log(pageTest);
        temppageCount=pageCount *pageNo;
        console.log(temppageCount);
    }
    else{
    pageTest= (pageTest*pageNo);
    }
    
    
    for (let key in data)
    {
        if (pageTest<temppageCount)
        {
            if(pageTest == key){
        let tbody = document.querySelector('.dataParent0');
         let tr = document.createElement('tr');
        
         tr.innerHTML = `
         <th scope="row">${data[key].id}</th>
         <td><img src="${data[key].avatar}" style="max-width:128px; max-height:128px;"></td>
         <td>${data[key].email}</td>
         <td>${data[key].first_name}</td>
         <td>${data[key].last_name}</td>
         <td>
         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm editData${data[key].id}">Edit</button>
         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm deleteData${data[key].id}">Delete</button>
         </td>
     
       
         `;
         tr.classList.add('dataChild');
         tr.classList.add(data[key].id);
     tbody.appendChild(tr);
     //console.log(document.querySelector('.deleteData'+ CSS.escape(data[key].id))); 
     //let dataSend='.deleteData'+data[key].id;
     document.querySelector('.editData'+CSS.escape(data[key].id)).addEventListener('click' , editData);
     document.querySelector('.deleteData'+CSS.escape(data[key].id)).addEventListener('click' , deleteData);
     pageTest=pageTest+1;
            }
        }
    
    }
   
    let noPage = document.querySelector('.pageNo');
    
    
     noPage.innerHTML = `
     ${pageNo}
   
     `;
     noPage.setAttribute('name',pageNo)
   


}


const editData = async (event) =>{
    // console.log(event.path[0].getAttribute("name"));
    //editNodeData =event.path[0].parentNode;
    let id=event.path[0].getAttribute("name");
   //console.log(id);
//    let data1 = await fetchData1();
//    let data2 = await fetchData2();
//    let data = [].concat(tempdata,data1, data2);
  // console.log(data);
    for (let key in data){
        if(data[key].id == id){

            let floatContent = document.querySelector('.floatForm');
    let div = document.createElement('div');
   
    div.innerHTML = `
    <div class="fixed-top-center position-absolute"  style="background-color:#858585; border-radius: 10px; padding: 40px; margin-left:60px;">
    <form class ="formTwo">
    <h1>Edit Form</h1>
    <div class="mb-3">
        <label for="firstName" class="form-label"><b>First Name</b></label>
        <input type="firstName" class="form-control" id="firstName2"" placeholder="${data[key].first_name}">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label"><b>Last Name</b></label>
        <input type="lastName" class="form-control" id="lastName2" placeholder="${data[key].last_name}">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label"><b>Email</b></label>
        <input type="email" class="form-control" id="email2" placeholder="${data[key].email}">
      </div>
      <button name="${data[key].id}" type="button" class="btn btn-success update updateData${data[key].id}" >Update</button>
    </form></div>    
    
  
    `;
div.classList.add('floatChild');
floatContent.appendChild(div);
document.querySelector('.updateData'+CSS.escape(data[key].id)).addEventListener('click' , updateData);
        }
    }
    
}
const updateData = async (event) =>{
    //console.log(event.path[0].getAttribute("name"));
    //console.log(event.path[0].parentNode.parentNode);
    //console.log(editNodeData);
    //console.log('here');
    let id=event.path[0].getAttribute("name");
    // let data1 = await fetchData1();
    // let data2 = await fetchData2();
    // let data = [].concat(tempdata,data1, data2);
    //console.log(data);
    // let count=0;
   // let check = 0;
    //  for (let key in data){
    //      if(data[key].id == id){
    //         data[key].first_name= document.querySelector('#firstName2').value;
    //         data[key].last_name = document.querySelector('#lastName2').value;
    //         data[key].email = document.querySelector('#email2').value;

    //         let tbody = document.querySelector('.dataParent');
    //         let tr = document.getElementsByClassName('.'+CSS.escape(id));
    //         let newTr = document.createElement('tr');
           
    //         newTr.innerHTML = `
            
    //         <th scope="row">${data[key].id}</th>
    //         <td><img src="${data[key].avatar}" style="max-width:128px; max-height:128px;"></td>
    //         <td>${data[key].email}</td>
    //         <td>${data[key].first_name}</td>
    //         <td>${data[key].last_name}</td>
    //         <td>
    //         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm editData${data[key].id}">Edit</button>
    //         <button name="${data[key].id}" class="btn btn-outline-secondary btn-sm deleteData${data[key].id}">Delete</button>
    //         </td>
          
    //         `;
    //         newTr.classList.add('dataChild');
    //         newTr.classList.add(data[key].id);
    //     tbody.replaceChild(newTr,tbody.childNodes[count]);
        
        
    //     //console.log(tbody.childNodes[count]);
    //     //tbody.childNodes[count].remove();
    //  document.querySelector('.editData'+CSS.escape(data[key].id)).addEventListener('click' , editData);
    //  document.querySelector('.deleteData'+CSS.escape(data[key].id)).addEventListener('click' , deleteData);
    //      }
    //      count=count+1;
    //  }
    //console.log(event.target.name);
    //await deleteFromApi(event.target.name);
    //console.log(data[key].first_name);
   
    for (let key in data){
        if (data[key].id == id ){
            data[key].first_name= document.querySelector('#firstName2').value;
            console.log(data[key].first_name);
            data[key].last_name = document.querySelector('#lastName2').value;
           data[key].email = document.querySelector('#email2').value;
        }
        
    }

     await removeFloat();
     await removeBody();
     await showFilterData();
    
    //console.log(data);
   
}
const removeFloat = async() =>{
    let floatContent = document.querySelector('.floatForm');
    let floatChild = document.querySelector('.floatChild');
    floatContent.removeChild(floatChild);
}

const  deleteData = async(event) =>{
    //console.log(event);
    console.log(event.target.name);
    //console.log(event.path[0].parentNode.parentNode);
    event.path[0].parentNode.parentNode.parentNode.removeChild(event.path[0].parentNode.parentNode);
    //let selectData = document.querySelector(CSS.escape(dataSend));
    //console.log(selectData);
    await deleteFromApi(event.target.name);
    let id=event.path[0].getAttribute("name");
    let count = 0;
    for (let key in data){
        if (data[key].id == id ){
            data.splice(count, 1); 
        }
        count=count+1;
    }
    await removeBody();
    await showFilterData();

    //console.log(data);
   

}

export const addData = async (id,email,firstName,lastName) => {
    let formInput=[
        {
            'id':id,
            'email':email,
            'first_name':firstName,
            'last_name':lastName,
            'avatar':'https://reqres.in/img/faces/1-image.jpg'
        }
    ]
    await allData(formInput);
}

export const removeBody= async() =>{
    
    let dataParent = document.querySelector('.dataParent0');
    //let div = document.createElement('div');
   
    dataParent.innerHTML = `
    <div class="floatForm"></div>
    `;
    

    
}
//console.log(document.querySelector('.formPage button.back'));
const nextPage = async() =>{
    pageNo=pageNo+1;
   await removeBody();
    await showFilterData();
}
document.querySelector('.formPage button.foward').addEventListener('click', nextPage);

const previousPage = async() =>{
    if (pageNo>1){
    pageNo=pageNo-1;
   await removeBody();
    await showFilterData();
    }   
}
document.querySelector('.formPage button.back').addEventListener('click', previousPage);

const setPageData = async() =>{
    let pageCountTemp = document.querySelector('#pageNoSelect').value;
    if (pageCountTemp>0){
    pageCount=pageCountTemp;
   await removeBody();
    await showFilterData();
    }   
}
document.querySelector('.pageNoForm button.pageNoSubmit').addEventListener('click', setPageData);

const idManage = async() =>{
   // console.log(idSort);
if (idSort == 0){
    
data.sort(compareIdasc);
removeBody();
showFilterData();
idSort=1;
}
else{
data.sort(compareIddsc);
removeBody();
showFilterData();
idSort=0;
}
}
document.querySelector('.Idth').addEventListener('click', idManage);

function compareIdasc( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }

  
function compareIddsc( b, a ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }




