import { addTodoItem, getTodoItems, removeTodoItem ,removeAllItems , doneTodoItem, unDoneTodoItem} from './modules/todo.js'

document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clear').addEventListener('click', handleClearAll);
showTodo();



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
function showTodo(){
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
     <div name = "dueDate" id="${todoItems[key].todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${todoItems[key].dueDate}</div>
     <div name = "todoItem" id="${todoItems[key].todoItem}" class="form-control" value ="${todoItems[key].todoItem}"><b>Task:</b> ${todoTask}</div>
     <button name="checkButton" id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
     <button name="unDoneButton" id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
     <button name="deleteButton" id="${todoItems[key].todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
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
    //console.log(event.target.id);
    doneTodoItem(event.target.id);
    resetTodo();
    showTodo();
    }
    if (event.target.name == 'unDoneButton'){
        //console.log('Check Clicked', event);
        //console.log(event.target.id);
        unDoneTodoItem(event.target.id);
        resetTodo();
        showTodo();
        }

    if (event.target.name == 'deleteButton'){
     
        //console.log('Remove Clicked', event);
        //console.log(event.target.parentNode.parentNode);
        //console.log(event.target.id);
        //event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        removeTodoItem(event.target.id);
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