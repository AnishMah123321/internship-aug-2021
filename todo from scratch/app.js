import { addTodoItem, getTodoItems, removeTodoItem ,removeAllItems , doneTodoItem, unDoneTodoItem, sortDateAsc} from './modules/todo.js';
import {curday} from './modules/date.js';
import {titleLoader , titleReset} from './modules/title.js';

document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clear').addEventListener('click', handleClearAll);
document.getElementById('overDue').addEventListener('click', handleOverDue);
document.getElementById('showAll').addEventListener('click', handleShowAll);
document.getElementById('urgent').addEventListener('click', handleUrgent);
document.getElementById('sortDate').addEventListener('click', handlesortDate);
showTodo();
oneDayNotification();


function handleShowAll(){
    resetTodo();
    showTodo();
}
// document.getElementByname('deleteButton').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('todoItems', document.getElementsByName('todoItem')[0].value);
//     removeTodoItem(document.getElementsByName('todoItem')[0].value);
// })

// document.querySelectorAll('#todo-list-item button.deleteButton').forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log('Remove Clicked', event);
//         console.log(event.target.parentNode);
//         event.target.parentNode.parentNode.removeChild(event.target.parentNode);
//     });
// });


//let count=0;

//adding todo
function handleSubmitForm(event){
    event.preventDefault();
    let datePick = document.querySelector('#datePick').value;
    let todoText = document.querySelector('#todoText').value;

   //let datePick= document.getElementById('datePick').innerHTML;
   //let todoText= document.getElementById('todoText').innerHTML;
   //console.log(datePick);
   //console.log(todoText);
   
   
    if (datePick != '' && todoText != '' )
    addTodoItem(datePick,todoText);
    resetTodo();
        showTodo();
}
function handlesortDate(){
    let sortedArray = sortDateAsc();
    resetTodo();
    showTodoDateSort(sortedArray);

}

function handleOverDue(){
    resetTodo();
    titleLoader("Overdue Tasks");
    let todayDateTemp = curday('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};
    //console.log(todayDate);

    let data = getTodoItems();
    //console.log(data);
    for (let key in data){
        //console.log(data[key]);
        //console.log(data[key].dueDate[0]);
        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);

        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;
        //console.log(data.isComplete);
    if (data[key].isComplete == false){
    if(year < yy){
        //console.log(data[key]);
        showFilterData(data[key]);

       
    }
    else if (year == yy && month < mm) {
        //console.log(data[key]);
        showFilterData(data[key]);
       
    }
    else if (year == yy && month == mm && day < dd){
        //console.log(data[key]);
        showFilterData(data[key]);
       
    }
}
}
//console.log(object);
}

function showFilterData(dataList){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
<div class="input-group mb-3">
<div name = "dueDate" data-id="${dataList.todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${dataList.dueDate[0]} - ${dataList.dueDate[1]} - ${dataList.dueDate[2]}</div>
<div name = "todoItem" data-id="${dataList.todoItem}" class="form-control" value ="${dataList.todoItem}"><b>Task:</b> ${dataList.todoItem}</div>
<button name="checkButton" data-id="${dataList.todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
<button name="unDoneButton" data-id="${dataList.todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
<button name="deleteButton" data-id="${dataList.todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
</div>`;
li.classList.add('todo-list-item');
ul.appendChild(li);
}

function handleUrgent(){
    
    resetTodo();
    titleLoader("Urgent Tasks (7 days to complete)");
    let todayDateTemp = curday('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};
    //console.log(todayDate);

    let data = getTodoItems();
    //console.log(data);
    for (let key in data){
        //console.log(data[key]);
        //console.log(data[key].dueDate[0]);
        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);

        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;
        //console.log(data.isComplete);
    if (data[key].isComplete == false){
  if (year == yy && month == mm && day < dd+7){
        //console.log(data[key]);
        showFilterData(data[key]);
       
    }
}
}
//console.log(object);
}


function oneDayNotification(){
    
    
    let todayDateTemp = curday('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};
    //console.log(todayDate);

    let data = getTodoItems();
    //console.log(data);
    for (let key in data){
        //console.log(data[key]);
        //console.log(data[key].dueDate[0]);
        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);

        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;
        //console.log(data.isComplete);
    if (data[key].isComplete == false){
        
  if (year == yy && month == mm && day == dd+1){
        //console.log(data[key]);
        
        window.alert('You have 1 day to complete the task '+ data[key].todoItem);
       
    }
}
}
//console.log(object);
}




// function overDueDisplayHandle(){
//     let todoItems=overDueDisplay();
//    // console.log(todoItems);
    
//     for (let key in todoItems) {
//         //console.log(todoItems[key]);
     
//  }


//     //console.log(getTodoItems());
 
// }

function showTodo(){
    titleLoader("All Tasks");
    
    let todoItems=getTodoItems();
    //console.log(todoItems);
    for (let key in todoItems) {
     if (todoItems.hasOwnProperty(key)) {
         let todoTask=todoItems[key].todoItem;
     if (todoItems[key].isComplete == true){
        let test = todoItems[key].todoItem;
        todoTask = "<strike>" + test + "</strike>";
        //console.log(todoTask);
     }
     else{
         todoTask=todoItems[key].todoItem;
     }    
         let ul = document.querySelector('ul');
         let li = document.createElement('li');
        
         li.innerHTML = `
     <div class="input-group mb-3">
     <div name = "dueDate" data-id="${todoItems[key].todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${todoItems[key].dueDate[0]} - ${todoItems[key].dueDate[1]} - ${todoItems[key].dueDate[2]}</div>
     <div name = "todoItem" data-id="${todoItems[key].todoItem}" class="form-control" value ="${todoItems[key].todoItem}"><b>Task:</b> ${todoTask}</div>
     <button name="checkButton" data-id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
     <button name="unDoneButton" data-id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
     <button name="deleteButton" data-id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
     </div>`;
     li.classList.add('todo-list-item');
     ul.appendChild(li);   
     }
 }


    //console.log(getTodoItems());
 
}
function showTodoDateSort(){
    titleLoader("Sorted by date");
    
    let todoItems=sortDateAsc();
    //console.log(todoItems[0]);
    for (let key in todoItems) {
        //console.log(todoItems[key][1]);
     if (todoItems.hasOwnProperty(key)) {
         let todoTask=todoItems[key][1].todoItem;
         //console.log(todoTask);
     if (todoItems[key][1].isComplete == true){
        let test = todoItems[key][1].todoItem;
        todoTask = "<strike>" + test + "</strike>";
        //console.log(todoTask);
     }
     else{
         todoTask=todoItems[key][1].todoItem;
     }    
         let ul = document.querySelector('ul');
         let li = document.createElement('li');
        
         li.innerHTML = `
     <div class="input-group mb-3">
     <div name = "dueDate" data-id="${todoItems[key][1].todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${todoItems[key][1].dueDate[0]} - ${todoItems[key][1].dueDate[1]} - ${todoItems[key][1].dueDate[2]}</div>
     <div name = "todoItem" data-id="${todoItems[key][1].todoItem}" class="form-control" value ="${todoItems[key][1].todoItem}"><b>Task:</b> ${todoTask}</div>
     <button name="checkButton" data-id="${todoItems[key][1].todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
     <button name="unDoneButton" data-id="${todoItems[key][1].todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
     <button name="deleteButton" data-id="${todoItems[key][1].todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
     </div>`;
     li.classList.add('todo-list-item');
     ul.appendChild(li);  
     
     
     }
 }


    //console.log(getTodoItems());
 
}


function resetTodo() {
    let ul = document.querySelector('ul');
         
    //      console.log(ul.removeChild('li'));
    //      console.log('here');
    ul.innerHTML='';

    //li.empty()
}



//clear all
function handleClearAll(event) {
    event.preventDefault();

    removeAllItems();
    document.querySelector('ul').innerHTML = '';
}



// function addTodo(datePick , todoText){
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.innerHTML = `
//     <div class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${datePick}</div>
//     <div class="input-group mb-3">
//     <div class="form-control"><b>Task:</b> ${todoText}</div>
//     <div class="input-group-append">
//     <button name="checkButton" class="btn btn-outline-secondary" type="done" >Done</button>
//     <button name="deleteButton" class="btn btn-outline-secondary" type="delete" >Delete</button>
//     </div></div>`;
//     li.classList.add('todo-list-item');
//     ul.appendChild(li);
    
// }


//dont tasks
// function handleClickDeleteOrCheck(event){
//     event.preventDefault();
   
//     console.log('todoItems', document.querySelectorAll('#todoItem').value);
//     removeTodoItem(document.getElementsByName('todoItem')[0].value);
    
// }
function handleClickDeleteOrCheck(event){
    event.preventDefault();

    if (event.target.name == 'checkButton'){
    //console.log('Check Clicked', event);
    //console.log(event.target.getAttribute('data-id'));
    //console.log(event.target.data-id);
    doneTodoItem(event.target.getAttribute('data-id'));
    resetTodo();
    showTodo();
    }
    if (event.target.name == 'unDoneButton'){
        //console.log('Check Clicked', event);
        //console.log(event.target.id);
        unDoneTodoItem(event.target.getAttribute('data-id'));
        resetTodo();
        showTodo();
        }

    if (event.target.name == 'deleteButton'){
     
        //console.log('Remove Clicked', event);
        //console.log(event.target.parentNode.parentNode);
        //console.log(event.target.id);
        //event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        removeTodoItem(event.target.getAttribute('data-id'));
        resetTodo();
        showTodo();
    }
    
}




// function deleteTodo(event){
//     let item = event.target.parentNode;
//     count=count-1;


//     item.addEventListener('transitionend', function () {
//        let test='todo-list-item';
//     let test2= String(count);
//     let message = test.concat(test2);
//     const div =  document.querySelector('div');
//     console.log(message);
//     div.classList.remove(message);
        
//         //document.getElementsByClassName(message).style.display="none";
//         //div.parentNode.removeChild(liid);
//         //item.remove(); 
//         //element.parentNode.removeChild(message);
//     });
    

//     item.classList.add('todo-list-item-fall');

// }