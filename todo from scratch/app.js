document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clear').addEventListener('click', handleClearAll);

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
        addTodo(datePick, todoText);
    
}

// function addTodo(datePick , todoText){
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     let test='todo-list-item';
//     let test2= String(count);
//     let message = test.concat(test2);
//     li.innerHTML = `
//     <div class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${datePick}</div>
//     <div class="input-group mb-3">
//     <div class="form-control"><b>Task:</b> ${todoText}</div>
//     <div class="input-group-append">
//     <button name="checkButton" class="btn btn-outline-secondary" type="done" >Done</button>
//     <button name="deleteButton" class="btn btn-outline-secondary" type="delete" >Delete</button>
//     </div></div>`;
//     li.classList.add(message);
//     ul.appendChild(li);
//     count=count+1;
    
// }

function addTodo(datePick , todoText){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
    <div class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${datePick}</div>
    <div class="input-group mb-3">
    <div class="form-control"><b>Task:</b> ${todoText}</div>
    <div class="input-group-append">
    <button name="checkButton" class="btn btn-outline-secondary" type="done" >Done</button>
    <button name="deleteButton" class="btn btn-outline-secondary" type="delete" >Delete</button>
    </div></div>`;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
    
}


//dont tasks
function handleClickDeleteOrCheck(event){
    if (event.target.name == 'checkButton')
        doneTodo(event);

    if (event.target.name == 'deleteButton')
        deleteTodo(event);
}

function doneTodo(event){

    
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

function deleteTodo(event){
   
    
   
    item.classList.add('todo-list-item-fall');

}


//clear all
function handleClearAll(event) {
    document.querySelector('ul').innerHTML = '';
}





