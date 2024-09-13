function newToDo() {
  const todo = prompt("Enter a new to-do:");
  if (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = 'col card h-100 text-center p-3'
    todoDiv.textContent = todo;
    todoDiv.onclick = () => confirmDeletion(todoDiv);
    document.getElementById("tablr").prepend(todoDiv);
    saveToCookie();
  }
}

function confirmDeletion(todoDiv) {
  if (confirm("Are you sure you want to delete this to-do?")) {
    todoDiv.remove();
    saveToCookie();
  }
}

function saveToCookie() {
  const todos = Array.from(document.getElementById("tablr").children).map(todoDiv => todoDiv.textContent);
  document.cookie = "todos=" + JSON.stringify(todos);
}

function loadFromCookie() {
  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find(cookie => cookie.startsWith("todos="));
  if (todoCookie) {
    const todos = JSON.parse(todoCookie.substring(6));
    todos.forEach(todo => {
      const todoDiv = document.createElement("div");
      todoDiv.className = 'col card h-100 text-center p-3'
      todoDiv.textContent = todo;
      todoDiv.onclick = () => confirmDeletion(todoDiv);
      document.getElementById("tablr").prepend(todoDiv);
    });
  }
}


loadFromCookie();
