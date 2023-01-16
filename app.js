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
  mainTaskContainer.innerText = "Andrew";
  mainContainer.appendChild(mainTaskContainer);
}

renderTodo();

// Make a function that push the new todo
