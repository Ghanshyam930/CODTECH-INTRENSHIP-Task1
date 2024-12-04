document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    const addTask = () => {
        const taskValue = taskInput.value.trim();
        if (taskValue === "") {
            alert("Task cannot be empty!");
            return;
        }

        // Create list item
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => taskList.removeChild(listItem);

        // Append button to list item
        listItem.appendChild(deleteBtn);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    };

    // Add task on button click
    addTaskBtn.addEventListener("click", addTask);

    // Add task on pressing Enter
    taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
