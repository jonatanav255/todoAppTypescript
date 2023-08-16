const inputBox = document.getElementById("input-box") as HTMLInputElement;

const listContainer = document.getElementById(
  "list-container"
) as HTMLUListElement;

function addTask() {
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.tagName === "LI") {
      clickedElement.classList.toggle("checked");
      saveData();
    } else if (clickedElement.tagName === "SPAN") {
      clickedElement.parentElement?.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data !== null) {
    listContainer.innerHTML = data;
  }
}
showTask();
