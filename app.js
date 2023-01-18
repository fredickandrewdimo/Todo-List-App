// Live date on the Header
function dateToday() {
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var months = [
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

  const dateTodayEl = document.getElementById("date-today");
  dateTodayEl.innerText = `${days[day]}, ${date} ${months[month]}`;
}
dateToday();

// Create Todo Function
function createTodo() {
  const newTaskBtn = document.getElementById("new-task-btn");
  newTaskBtn.addEventListener("click", function () {
    modalContainer.style.display = "block";
  });

  let modalContainer = document.getElementById("modal-container");

  const cancelBtn = document.getElementById("cancel-btn");
  cancelBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
  });

  const addTaskBtn = document.getElementById("add-task-btn");
  addTaskBtn.addEventListener("click", function (event) {
    addTodo();
    modalContainer.style.display = "none";
    event.stopPropagation();
  });
}
createTodo();

// Add Todo Function
let todos = [];

function addTodo() {
  // Get the value to title
  const titleInput = document.getElementById("title-input");
  const title = titleInput.value;

  // Get the value of description
  const descriptionInput = document.getElementById("description-input");
  const description = descriptionInput.value;

  // Get the value of date picker
  const dueDateInput = document.getElementById("due-date-input");
  const dueDate = dueDateInput.value;

  // Creates a random ids using getTime()
  const id = "" + new Date().getTime();

  // Push the object of todo
  todos.push({
    title: title,
    description: description,
    dueDate: dueDate,
    id: id,
  });

  // Clear input values after submission
  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";

  // run render todo function
  renderTodo();
}

// RenderTodo Function
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
    editBtn.addEventListener("click", () => editTodo(todo));

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

    // Creates the delete button icon
    const deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(deleteBtnIcon);
  });
}
renderTodo();

// Remove Todo function
function removeTodo() {
  // Gets the delete button
  const deleteBtn = document.getElementsByClassName("delete-btn");

  // Creates a loop that will search for all delete buttons
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
      const id = this.id;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1);
          break;
        }
      }
      renderTodo();
    });
  }
}

// Edit todo function
let currentTodo = [];

function editTodo(todo) {
  // declare current todo is equals to todo
  currentTodo = todo;

  // display the modal for edit
  const modalContainerEdit = document.getElementById("modal-container-edit");
  modalContainerEdit.style.display = "block";

  document.getElementById("title-input-edit").value = todo.title;
  document.getElementById("description-input-edit").value = todo.description;
  document.getElementById("due-date-input-edit").value = todo.dueDate;

  document
    .getElementById("save-changes-btn-edit")
    .addEventListener("click", function () {
      currentTodo.title = document.getElementById("title-input-edit").value;
      currentTodo.description = document.getElementById(
        "description-input-edit"
      ).value;
      currentTodo.dueDate = document.getElementById(
        "due-date-input-edit"
      ).value;

      let index = todos.findIndex((todo) => todo.id === currentTodo.id);
      todos[index] = currentTodo;

      modalContainerEdit.style.display = "none";

      renderTodo();
    });

  document
    .getElementById("cancel-btn-edit")
    .addEventListener("click", function () {
      modalContainerEdit.style.display = "none";
    });

  renderTodo();
}
