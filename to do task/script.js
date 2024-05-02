// Load tasks from localStorage when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = '';

        // Save tasks to localStorage after adding a new task
        saveTasks();
    }
}

function deleteTask(task) {
    task.parentNode.remove();

    // Save tasks to localStorage after deleting a task
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.innerHTML;

    // Save tasks to localStorage
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    var taskList = document.getElementById("taskList");

    // Load tasks from localStorage
    var savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}
