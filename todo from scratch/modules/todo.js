import { curday } from './date.js';
import { addItem, getItems, removeItemById, removeAll ,doneItemById, unDoneItemById} from './store.js'


export const addTodoItem = (datePick,todoItem) => {
    //console.log('Added Todo Item', datePick , todoItem);
    if(!datePick || !todoItem) {
        throw new Error('Field Empty')
    }

    const todoItems = getItems();

    for(let item of todoItems) {
        if(item.todoItem.toLowerCase() === todoItem.toLowerCase()) {
            throw new Error('Item already exists')
        }
    }
    let datePick2 = datePick.split("-")

    let newTodoItem = {
        id: Math.random(),
        todoItem: todoItem,
        dueDate: datePick2,
        isComplete: false,
        completedDate: null
    }
    addItem(newTodoItem);
    return newTodoItem;
}

export const getTodoItems = () => {
    return getItems();
}

export const removeTodoItem = (todoItem) => {
    //console.log('Removed Todo Item', todoItem);
    removeItemById(todoItem);
}

export const doneTodoItem = (todoItem) => {
    //console.log('Done Todo Item', todoItem);
    doneItemById(todoItem);
}

export const unDoneTodoItem = (todoItem) => {
    //console.log('Done Todo Item', todoItem);
    unDoneItemById(todoItem);
}

export const removeAllItems = () => {
    removeAll();
}   

// export const overDueDisplay = () => {
//     let todayDateTemp = curday('-');
//     let todayDate=todayDateTemp.split("-");
//     let object ={};
//     //console.log(todayDate);
//     //console.log(todayDate);
//     let data = getItems();
//     //console.log(data);
//     for (let key in data){
//         //console.log(data[key]);
//         //console.log(data[key].dueDate[0]);
//         let year=parseInt(data[key].dueDate[0]);
//         let month=parseInt(data[key].dueDate[1]);
//         let day=parseInt(data[key].dueDate[2]);

//         let yy=parseInt(todayDate[0]);
//         let mm=parseInt(todayDate[1]);
//         let dd=parseInt(todayDate[2]);
//         let tempObject=object;

//     if(year < yy){
//         //console.log(data[key]);
//         object = Object.assign(object, data[key]);

       
//     }
//     else if (year == yy && month < mm) {
//         //console.log(data[key]);
//         object = Object.assign(object, data[key]);
       
//     }
//     else if (year == yy && month == mm && day == dd){
//         //console.log(data[key]);
//         object = Object.assign(object, data[key]);
       
//     }
// }
// console.log(object);
// return object ;
    

// }

