//"pop-up close window" section
const popOutButton = document.getElementById("button");
const bg_container = document.querySelector(".bg-popContainer");

// Add event listeners
popOutButton.addEventListener("click", popOutNow);

function popOutNow(e) {
  e.preventDefault();

  document.querySelector(".bg-popContainer").style.display = "flex";
}

const cancelPop = document.getElementById("close");
cancelPop.addEventListener("click", CancelPopOut);

function CancelPopOut(e) {
  e.preventDefault();
  document.querySelector(".bg-popContainer").style.display = "none";
}

//END of pop-up sec.

let tasks = [];
let tasklist = document.getElementById("tasklist");
let inputtext = document.getElementById("Input1");

function saveToLocalStorage() {
  localStorage.setItem("task", JSON.stringify(tasks));
}

(function () {
  tasks = JSON.parse(localStorage.getItem("task")) || [];
  renderList();
})();

function onAddTask(e) {
  e.preventDefault();
  const task = inputtext.value;
  if (task) {
    tasks.push({ text: task, isCompleted: false });
 
    saveToLocalStorage();
    renderList();
  }
}
function onEdit(index, task, listItem, listLabel, updateButton) {
  const updateInput = document.createElement("input");
  updateInput.type = "text";
  updateInput.value = task;
  updateInput.id = "update-input";
  listItem.replaceChild(updateInput, listLabel);
  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "btn ";
  saveButton.innerHTML =
    '<i class="bi bi-save" style="color:blue; font-size:20px;padding-right: 5px;"></i>';
  saveButton.addEventListener("click", () => {
    const newTask = updateInput.value;
    listLabel.innerHTML = newTask;
    listItem.replaceChild(listLabel, updateInput);
    listItem.replaceChild(updateButton, saveButton);
    tasks = tasks.map((theTask, i) => {
      if (index === i) {
        return { text: newTask, isCompleted: false };
      } else {
        return theTask;
      }
    });
    saveToLocalStorage();
  });
  listItem.replaceChild(saveButton, updateButton);
}
function onDelete(index, listItem) {
  tasks.splice(index, 1);
  saveToLocalStorage();
  tasklist.removeChild(listItem);
}

function onChecked(index, editButton) {
   tasks[index].isCompleted = !tasks[index].isCompleted;
  if (tasks[index].isCompleted) {
    editButton.disabled = true;
  } else {
    editButton.disabled = false;
  }
  saveToLocalStorage();
}

function renderList() {
  tasklist.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const label = document.createElement("label");
    label.innerHTML = task.text;
    const editButton = document.createElement("button");
    editButton.id = "edit-button";
    editButton.type = "submit";
    editButton.className = "btn";
    editButton.disabled=false;
    const deleteButton = document.createElement("button");
    deleteButton.type = "submit";
    deleteButton.className = "btn ";
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    editButton.onclick = () => onEdit(index, task.text, li, label, editButton);
    deleteButton.onclick = () => onDelete(index, li);
    editButton.innerHTML =
      '<i class="bi bi-pencil" style="color:blue; font-size:20px;padding-right: 5px;" ></i>';
    deleteButton.innerHTML =
      '<i class="bi bi-trash" style="color:red;  font-size:20px"></i>';
    editButton.disabled =task.isCompleted;
    checkBox.checked = task.isCompleted;
    checkBox.onchange = (e) => onChecked(index, editButton);
    tasklist.appendChild(li);
    inputtext.value = "";
  });
}
