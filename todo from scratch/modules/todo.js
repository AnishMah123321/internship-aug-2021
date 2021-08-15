import { addItem, getItems, removeItemByName } from './store.js'

export const addTodoItem = (datePick,todoItem) => {
    console.log('Added Todo Item', datePick , todoItem);
    if(!datePick || !todoItem) {
        throw new Error('Field Empty')
    }

    const todoItems = getItems();

    for(let item of todoItems) {
        if(item.todoItems.toLowerCase() === todoItem.toLowerCase()) {
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

export const removeTodoItem = (name) => {
    console.log('Removed Todo Item', name);
    removeItemByName(name);
}