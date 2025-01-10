function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById("todoList");

        const section = document.createElement("section");
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = function() {
            todoList.removeChild(section);
            saveTasks();
        };

        section.appendChild(listItem);
        section.appendChild(deleteButton);
        todoList.appendChild(section);

        taskInput.value = "";
        saveTasks(); // Save tasks to localStorage
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#todoList li").forEach((item) => {
        tasks.push(item.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        const taskInput = document.getElementById("newTask");
        taskInput.value = task;
        addTask();
    });
}

window.addEventListener("load", loadTasks);
