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

// Modal Function
function modal() {
  const newTaskBtn = document.getElementById("new-task-btn");
  const modalContainer = document.getElementById("modal-container");

  newTaskBtn.addEventListener("click", function () {
    modalContainer.style.display = "block";
  });

  const cancelBtn = document.getElementById("cancel-btn");
  cancelBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
  });

  const addTaskBtn = document.getElementById("add-task-btn");
  addTaskBtn.addEventListener("click", function () {
    addTodo();
    modalContainer.style.display = "none";
  });
}
modal();

// Make an object that stores the todos
let todos = [
  //   {
  //     title: "Task1",
  //     description: "The handsome codeer",
  //     dueDate: "Monday, 13 January",
  //     id: "id1",
  //   },
];

// Make a function that push the new todo
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

  //   Creates a random ids using getTime()
  const id = "" + new Date().getTime();
  //   added the object of todo
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

  //   run render todo function to scope the variable
  renderTodo();
}

// Make a function that renders the list
function renderTodo() {
  const mainListContainer = document.getElementById("main-list-container");
  mainListContainer.innerHTML = "";

  todos.forEach(function (todo) {
    const innerMainTaskContainer = document.createElement("div");
    innerMainTaskContainer.classList.add("main-task-container");
    mainListContainer.appendChild(innerMainTaskContainer);

    const textboxInput = document.createElement("input");
    textboxInput.setAttribute("type", "checkbox");
    textboxInput.classList.add("textbox-input");
    innerMainTaskContainer.appendChild(textboxInput);

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    innerMainTaskContainer.appendChild(taskContainer);

    const taskTitle = document.createElement("h4");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = todo.title;
    taskContainer.appendChild(taskTitle);

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("description");
    descriptionEl.innerText = todo.description;
    taskContainer.appendChild(descriptionEl);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    taskContainer.appendChild(detailsContainer);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");
    detailsContainer.appendChild(dateContainer);

    const dueDateIcon = document.createElement("i");
    dueDateIcon.classList.add("fa-solid", "fa-calendar-days", "due-date-icon");
    dateContainer.appendChild(dueDateIcon);

    const dueDateEl = document.createElement("p");
    dueDateEl.classList.add("due-date");
    dueDateEl.innerText = todo.dueDate;
    dateContainer.appendChild(dueDateEl);

    const deleteEditBtnContainer = document.createElement("div");
    deleteEditBtnContainer.classList.add("edit-delete-btn");
    detailsContainer.appendChild(deleteEditBtnContainer);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    deleteEditBtnContainer.appendChild(editBtn);
    editBtn.id = todo.id;

    const editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("fa-solid", "fa-pen-to-square");
    editBtn.appendChild(editBtnIcon);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteEditBtnContainer.appendChild(deleteBtn);
    deleteBtn.id = todo.id;
    deleteBtn.onclick = removeTodo;

    const deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.classList.add("fa-solid", "fa-trash");
    deleteBtn.appendChild(deleteBtnIcon);
  });
}

renderTodo();

// Remove Todo Function
function removeTodo() {
  const deleteBtn = document.getElementsByClassName("delete-btn");

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
