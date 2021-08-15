import { addItem, getItems, removeItemById, removeAll ,doneItemById, unDoneItemById} from './store.js'

export const addTodoItem = (datePick,todoItem) => {
    console.log('Added Todo Item', datePick , todoItem);
    if(!datePick || !todoItem) {
        throw new Error('Field Empty')
    }

    const todoItems = getItems();

    for(let item of todoItems) {
        if(item.todoItem.toLowerCase() === todoItem.toLowerCase()) {
            throw new Error('Item already exists')
        }
    }

    let newTodoItem = {
        id: Math.random(),
        todoItem: todoItem,
        dueDate: datePick,
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

