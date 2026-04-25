const todos = [];

function handleTodo(action, index) {
    if (action === 'add') {
        const input = document.getElementById("todoInput");
        const value = input.value.trim();
        if (!value) return;
        todos.push({ text: value, completed: false });
        input.value = "";
    } else if (action === 'toggle') {
        todos[index].completed = !todos[index].completed;
    } else if (action === 'remove') {
        todos.splice(index, 1);
    }

    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo, i) => {
        const li = document.createElement("li");
        if (todo.completed) li.className = "completed";

        const checkbox = document.createElement("button");
        if (todo.completed) {
            checkbox.className = "checked";
            checkbox.innerHTML = `<svg viewBox="0 0 12 12" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <polyline points="1,6 4.5,10 11,2" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        }
        checkbox.onclick = () => handleTodo('toggle', i);

        const span = document.createElement("span");
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`;
        deleteBtn.onclick = () => handleTodo('remove', i);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

document.getElementById("todoInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleTodo('add');
});

document.getElementById("addBtn").addEventListener("click", () => handleTodo('add'));
