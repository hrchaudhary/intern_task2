// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = taskText;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
  }
}

// Add event listener to the add task button
addTaskButton.addEventListener("click", addTask);
