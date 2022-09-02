document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = document.getElementById("new-task-description");
    const task = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function (event) {
      event.target.parentNode.remove();
    });
    task.innerText = newTask.value;
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    event.target.reset();
  });
});
