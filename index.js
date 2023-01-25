
let labels = [];

function editOnClick(label, parent, inputtext, listItem) {
  inputtext.value = label.innerText;
  tasklist.removeChild(listItem);
  parent.parentElement.removeChild(parent);
}

function deleteOnClick(tasklist, listItem,label) {
  var index = labels.indexOf(label);
  if (index !== -1) {
    labels.splice(index, 1);
  }
  localStorage.setItem('listitem', JSON.stringify(labels));
  tasklist.removeChild(listItem);
}

function onAddTask(e) {
  commonFunc(true,null);

  let json_string = JSON.stringify(labels);
  console.log(json_string);
  localStorage.setItem('listitem', json_string);
}

function commonFunc(isaddTask = false,load_label=null) {

  let tasklist = document.getElementById("tasklist");
  let inputtext = document.getElementById("Input1");
  if(isaddTask) {
    if (inputtext.value.trim().length == '') {
      return;
    }
  }
  
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

  const parent = editButton.parentElement;
  editButton.onclick = () => editOnClick(label, parent,inputtext,listItem);

  let deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.className = "btn ";
  deleteButton.innerHTML =
    '<i class="bi bi-trash" style="color:red;  font-size:20px"></i>';
  deleteButton.onclick = () => deleteOnClick(tasklist, listItem,label.innerText);
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
    commonFunc(false,tasklabels[i]);
  }

}

(function () {
  loadTaskList();
})();
