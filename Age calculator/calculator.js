document.getElementById("date").oninput = function () {
  if (this.value.length >= 2) {
    document.getElementById("month").focus();
  }
};
document.getElementById("month").oninput = function () {
  if (this.value.length >= 2) {
    document.getElementById("year").focus();
  }
};
function handleKeyDown(event) {
  if (event.key === "Enter") {
    getAge(); // Trigger the getAge function when Enter is pressed
  }
}

// Attach the event listeners for keydown on date, month, and year inputs
document.getElementById("date").addEventListener("keydown", handleKeyDown);
document.getElementById("month").addEventListener("keydown", handleKeyDown);
document.getElementById("year").addEventListener("keydown", handleKeyDown);
function getAge() {
  let date = parseInt(document.getElementById("date").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  let dt = new Date();
  let currentDate = dt.getDate();
  let currentMonth = dt.getMonth() + 1; // Months are zero-based
  let currentYear = dt.getFullYear();
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (date > currentDate) {
    currentDate += monthDays[currentMonth - 1];
    currentMonth--;
  }

  if (month > currentMonth) {
    currentMonth += 12;
    currentYear--;
  }

  let d = currentDate - date;
  let m = currentMonth - month;
  let y = currentYear - year;

  let monthColor = "green";
  let yearColor = "red";
  let dayColor = "purple";

  // Example code for displaying age with different colors
  document.querySelector(".age").innerHTML =
    "Your age is <span style='color:" +
    yearColor +
    "'>" +
    y +
    "</span> Years <span style='color:" +
    monthColor +
    "'>" +
    m +
    "</span> Months <span style='color:" +
    dayColor +
    "'>" +
    d +
    "</span> Days.";
}
