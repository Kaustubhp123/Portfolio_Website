// script.js

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

function searchTasks() {
    var searchInput = document.getElementById("searchInput").value.toUpperCase();
    var tasks = document.getElementById("taskList").getElementsByTagName("li");

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var taskText = task.textContent.toUpperCase();
        if (taskText.indexOf(searchInput) > -1) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    }
}