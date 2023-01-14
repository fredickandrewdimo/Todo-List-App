// Live date on the Header

document.addEventListener("DOMContentLoaded", function () {
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
});

// Modal Function

window.onload = function () {
  const newTaskBtn = document.getElementById("new-task-btn");
  const modalContainer = document.getElementById("modal-container");

  newTaskBtn.addEventListener("click", function () {
    modalContainer.style.display = "block";
  });
};
