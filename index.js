
let labels = [];

function editOnClick(label, editButton) {
  inputtext.value = label.innerText;
  const parent = editButton.parentElement;
  parent.parentElement.removeChild(parent);
}

function deleteOnClick(tasklist, listItem) {
  tasklist.removeChild(listItem);
}

function onAddTask(e) {
  commonFunc();

  let json_string = JSON.stringify(labels);
  console.log(json_string);
  localStorage.setItem('listitem', json_string);
}

function commonFunc(load_label = null) {
  let tasklist = document.getElementById("tasklist");
  let inputtext = document.getElementById("Input1");
  let listItem = document.createElement("li")
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let label = document.createElement("label");
  //this is add text scenario
  if (inputtext.value.trim().length != '') {
    label.innerText = inputtext.value;
    labels.push(label.innerText);
  } //this is load page scenario
  else if (load_label != null) {
    label.innerText = load_label;
  }
  let editInput = document.createElement("input");
  editInput.type = "text";
  let editButton = document.createElement("button");
  editButton.id = 'edit-button';
  editButton.type = "submit";
  editButton.className = "btn";
  editButton.innerHTML =
    '<i class="bi bi-pencil" style="color:blue; font-size:20px;padding-right: 5px;" ></i>';
  editButton.onClick = () => editOnClick(label, editButton);

  let deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.className = "btn ";
  deleteButton.innerHTML =
    '<i class="bi bi-trash" style="color:red;  font-size:20px"></i>';
  deleteButton.onClick = () => deleteOnClick(tasklist, listItem);
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  tasklist.appendChild(listItem);
  inputtext.value = '';

}

function loadTaskList() {
  let tasklabels = JSON.parse(localStorage.getItem('listitem'));
  for (let i = 0; i < tasklabels.length; i++) {
    console.log(tasklabels[i]);
    commonFunc(tasklabels[i]);
  }

}

(function () {
  loadTaskList();
})();
