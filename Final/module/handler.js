import {addData, showData,removeBody,showFilterData} from './app.js'

//console.log(document.querySelector('form'))
await showData();
await removeBody();
await showFilterData();






export const handleSubmitForm = async(event) =>{
    event.preventDefault();
    //console.log('here');
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let id = Math.random();
    if (firstName !='' && lastName !='' && email != ''){
    await addData(id,email,firstName,lastName);
    }
    else{
        window.alert('empty field')
    }
    
}
document.querySelector('.formOne button').addEventListener('click', handleSubmitForm);