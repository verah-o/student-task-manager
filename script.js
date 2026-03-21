// Load tasks from localStorage on page load
window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let task of tasks) {
        addTaskToList(task);
    }
};

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    addTaskToList(task);
    saveTask(task);

    input.value = "";
}

function addTaskToList(task) {
    let li = document.createElement("li");
    li.textContent = task;

    // Mark as complete
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // Double click to delete
    li.ondblclick = function () {
        li.remove();
        removeTask(task);
    };

    document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}