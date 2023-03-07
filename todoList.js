
const inputEl = document.getElementById("todoInput");
const addButtonEl = document.getElementById("addTodoButton");
const todoListEl = document.getElementById("todoList")
let todoList = []

function addTodo() {
    const inputValue = inputEl.value

    if (inputValue !== "") {
        const todo = {
            id: crypto.randomUUID(),
            title: inputValue
        }
    
        todoList.push(todo)
        addTodoToPage(todoList)
        inputEl.value = ""
    }

    return false
}

// dito nagccreate tayo ng element for any addded todo
function addTodoToPage(todos) {
    todoListEl.innerHTML = "";
    todoList.forEach((todo) => {
        const todoWrapper = document.createElement("div");
        todoWrapper.className = "todo-item";
        todoWrapper.appendChild(document.createTextNode(todo.title))

        const removeButton = document.createElement("button")
        removeButton.className = "remove-item-button"
        removeButton.innerText = "Remove"
        removeButton.setAttribute("id", todo.id)
        removeButton.onclick = function(event) {
            removeTodo(event)
        }

        todoWrapper.appendChild(removeButton)
        todoListEl.appendChild(todoWrapper)
    })
}


// remove function
function removeTodo(event) {
    event.target.parentElement.remove();
    todoList = todoList.filter(todo => todo.id !== event.target.id)
}