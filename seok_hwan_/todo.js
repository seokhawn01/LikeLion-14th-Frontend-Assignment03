const todos = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (!value) return;

    todos.push({ text: value, completed: false });
    input.value = "";
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        });

        const span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed) span.style.textDecoration = "line-through";

        li.appendChild(checkbox);
        li.appendChild(span);
        list.appendChild(li);
    });
}

document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("todoInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
});
