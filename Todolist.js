document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>`;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
