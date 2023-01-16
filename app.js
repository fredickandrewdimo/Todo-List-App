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
}
modal();

// Make an object that store the todos
let todos = [
  {
    title: "Task1",
    description: "The handsome codeer",
    dueDate: "Monday, 13 January",
  },
];

// Make a function that renders the list
function renderTodo() {
  const mainContainer = document.getElementById("main-container");

  const mainTaskContainer = document.createElement("div");
  mainTaskContainer.classList.add("main-task-container");
  mainContainer.appendChild(mainTaskContainer);

  const textboxInput = document.createElement("input");
  textboxInput.setAttribute("type", "checkbox");
  textboxInput.classList.add("textbox-input");
  mainTaskContainer.appendChild(textboxInput);

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  mainTaskContainer.appendChild(taskContainer);

  const taskTitle = document.createElement("h4");
  taskTitle.classList.add("task-title");
  taskTitle.innerText = `Today's Task`;
  taskContainer.appendChild(taskTitle);

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae inventore quibusdam deserunt reiciendis ipsum assumenda, labore deleniti voluptatem tempora laboriosam.";
  taskContainer.appendChild(description);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");
  taskContainer.appendChild(detailsContainer);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");
  detailsContainer.appendChild(dateContainer);

  const dueDateIcon = document.createElement("i");
  dueDateIcon.classList.add("fa-solid", "fa-calendar-days", "due-date-icon");
  dateContainer.appendChild(dueDateIcon);

  const dueDate = document.createElement("p");
  dueDate.classList.add("due-date");
  dueDate.innerText = "Friday, 13 January";
  dateContainer.appendChild(dueDate);

  const deleteEditBtnContainer = document.createElement("div");
  deleteEditBtnContainer.classList.add("edit-delete-btn");
  detailsContainer.appendChild(deleteEditBtnContainer);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  deleteEditBtnContainer.appendChild(editBtn);

  const editBtnIcon = document.createElement("i");
  editBtnIcon.classList.add("fa-solid", "fa-pen-to-square");
  editBtn.appendChild(editBtnIcon);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteEditBtnContainer.appendChild(deleteBtn);

  const deleteBtnIcon = document.createElement("i");
  deleteBtnIcon.classList.add("fa-solid", "fa-trash");
  deleteBtn.appendChild(deleteBtnIcon);
}
renderTodo();

// Make a function that push the new todo
