// Live date on the Header
function getCurrentDate() {
  // Get the current date
  const today = new Date();

  // Get the current day as a number (0-6)
  const day = today.getDay();

  // Get the current date as a number (1-31)
  const date = today.getDate();

  // Get the current month as a number (0-11)
  const month = today.getMonth();

  // Array of days, where index 0 is Sunday, 1 is Monday, etc.
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of months, where index 0 is January, 1 is February, etc.
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the element with id "date-today"
  const dateTodayEl = document.getElementById("date-today");

  // Set the inner text of the element to the current day, date, and month
  dateTodayEl.innerText = `${days[day]}, ${date} ${months[month]}`;
}
getCurrentDate();

// Create Todo Function
function createTodo() {
  // Get the new task button
  const newTaskBtn = document.getElementById("new-task-btn");

  // Add a click event to the new task button
  newTaskBtn.addEventListener("click", openModal);

  // Get the modal container
  let modalContainer = document.getElementById("modal-container");

  // Get the cancel button
  const cancelBtn = document.getElementById("cancel-btn");

  // Add a click event to the cancel button
  cancelBtn.addEventListener("click", closeModal);

  // Get the add task button
  const addTaskBtn = document.getElementById("add-task-btn");

  // Add a click event to the add task button
  addTaskBtn.addEventListener("click", addAndCloseModal);

  // Functions used ↓

  function openModal() {
    // Show the modal
    modalContainer.style.display = "block";
  }

  function closeModal() {
    // Hide the modal
    modalContainer.style.display = "none";
  }

  function addAndCloseModal() {
    // Add the new to-do
    addTodo();

    // Close the modal
    closeModal();

    // Stop the click event from bubbling up to parent elements
    event.stopPropagation();
  }
}
createTodo();

// Add Todo Function
let todos = [];

function addTodo() {
  // Get the value entered in the "title-input" element
  const titleInput = document.getElementById("title-input");
  const title = titleInput.value;

  // Get the value entered in the "description-input" element
  const descriptionInput = document.getElementById("description-input");
  const description = descriptionInput.value;

  // Get the value entered in the "due-date-input" element
  const dueDateInput = document.getElementById("due-date-input");
  const dueDate = dueDateInput.value;

  // Error Validation

  // // Check if the title input is empty
  // if (!title) {
  //   alert("Invalid input. Please enter a title.");
  //   return;
  // }

  // // Check if the description input is empty
  // if (!description) {
  //   alert("Invalid input. Please enter a description.");
  //   return;
  // }

  // // Check if the due date input is empty
  // if (!dueDate) {
  //   alert("Invalid input. Please enter a due date.");
  //   return;
  // }

  // Creates a unique ID for the new todo usig the current time
  const id = "" + new Date().getTime();

  // Add the new todo to the "todos" array with the entered title, description, due date, and id
  todos.push({
    title: title,
    description: description,
    dueDate: dueDate,
    id: id,
  });

  // Clear the inputs fields after the todo is added
  function clearInputFields() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
  }
  clearInputFields();

  // Call the "renderTodo" function to update the list of todos on the page
  renderTodo();
}

// Render Todo Function
function renderTodo() {
  // Clear the main list contaioner so it won't repeat
  const mainListContainer = document.getElementById("main-list-container");
  mainListContainer.innerHTML = "";

  todos.forEach(function (todo) {
    // Creates the main container for the list
    const innerMainTaskContainer = document.createElement("div");
    innerMainTaskContainer.classList.add("main-task-container");
    mainListContainer.appendChild(innerMainTaskContainer);

    // Creates a checkbox for each task
    const textboxInput = document.createElement("input");
    textboxInput.setAttribute("type", "checkbox");
    textboxInput.classList.add("textbox-input");
    innerMainTaskContainer.appendChild(textboxInput);

    // Creates the container for each task
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    innerMainTaskContainer.appendChild(taskContainer);

    // Creates the title element
    const taskTitle = document.createElement("h4");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = todo.title;
    taskContainer.appendChild(taskTitle);

    // Creates the description element
    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("description");
    descriptionEl.innerText = todo.description;
    taskContainer.appendChild(descriptionEl);

    // Creates the container for details
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    taskContainer.appendChild(detailsContainer);

    // Creates the dueDate container
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");
    detailsContainer.appendChild(dateContainer);

    // Creates the dueDate icon
    const dueDateIcon = document.createElement("i");
    dueDateIcon.classList.add("fa-solid", "fa-calendar-days", "due-date-icon");
    dateContainer.appendChild(dueDateIcon);

    // Creates the dueDate value
    const dueDateEl = document.createElement("p");
    dueDateEl.classList.add("due-date");
    dueDateEl.innerText = todo.dueDate;
    dateContainer.appendChild(dueDateEl);

    // Creates the container for delete and edit button
    const deleteEditBtnContainer = document.createElement("div");
    deleteEditBtnContainer.classList.add("edit-delete-btn");
    detailsContainer.appendChild(deleteEditBtnContainer);

    // Creates the Edit button element
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    deleteEditBtnContainer.appendChild(editBtn);
    editBtn.id = todo.id;
    editBtn.addEventListener("click", editTodo);

    // Creates the Edit icon
    const editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("fa-solid", "fa-pen-to-square");
    editBtn.appendChild(editBtnIcon);

    // Creates the delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteEditBtnContainer.appendChild(deleteBtn);
    deleteBtn.id = todo.id;
    deleteBtn.onclick = removeTodo; // RemoveTodo Function
    deleteBtn.addEventListener("click", function () {
      console.log("Deleted");
    });

    // Creates the delete button icon
    const deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(deleteBtnIcon);
  });
}
renderTodo();

// Remove Todo Function
function removeTodo() {
  // Get all delete buttons
  const deleteButtons = document.getElementsByClassName("delete-btn");

  // Loop through each button
  for (let i = 0; i < deleteButtons.length; i++) {
    // Add click event to button
    deleteButtons[i].addEventListener("click", function () {
      // Get the id of the clicked button
      const id = this.id;

      // Loop through the to-do list
      for (let i = 0; i < todos.length; i++) {
        // Check if the id of the to-do matches the id of the button
        if (todos[i].id === id) {
          // Remove the to-do from the list
          todos.splice(i, 1);
          break;
        }
      }

      // Update the to-do list on the page
      renderTodo();
    });
  }
}

// Edit Todo Function

let currentTodo = {};

function editTodo(todo) {
  // Save the current to-do that is being edited
  currentTodo = todo;

  // Show the edit modal
  const modal = document.getElementById("modal-container-edit");
  modal.style.display = "block";

  // Fill the input fields with the current to-do's information
  document.getElementById("title-input-edit").value = todo.title;
  document.getElementById("description-input-edit").value = todo.description;
  document.getElementById("due-date-input-edit").value = todo.dueDate;

  // Add a click event to the save changes button
  document
    .getElementById("save-changes-btn-edit")
    .addEventListener("click", saveChanges);

  // Add a click event to the cancel button
  document
    .getElementById("cancel-btn-edit")
    .addEventListener("click", closeModal);

  // functions used ↓

  function saveChanges() {
    // Update the current to-do with the new information
    currentTodo.title = document.getElementById("title-input-edit").value;
    currentTodo.description = document.getElementById(
      "description-input-edit"
    ).value;
    currentTodo.dueDate = document.getElementById("due-date-input-edit").value;

    // Find the current to-do in the to-do list and update it
    let index = todos.findIndex((todo) => todo.id === currentTodo.id);
    todos[index] = currentTodo;

    // Close the modal
    closeModal();

    // Update the to-do list on the page
    renderTodo();
  }

  function closeModal() {
    // Hide the modal
    const modal = document.getElementById("modal-container-edit");
    modal.style.display = "none";
  }
}
