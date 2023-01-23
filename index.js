let tasklist = document.getElementById("tasklist");

function onAddTask(e) {
  e.preventDefault();


  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let label = document.createElement("label");

  let inputtext = document.getElementById("Input1");

  label.innerText = inputtext.value;
  inputtext.value = " ";

  let editInput = document.createElement("input");
  editInput.type = "text";

  let editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.className = "btn";
  editButton.innerHTML =
    '<i class="bi bi-pencil" style="color:blue; font-size:20px;padding-right: 5px;" ></i>';
  
  
editButton.addEventListener('click',(e)=>{
  
})


  let deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.className = "btn ";
  deleteButton.innerHTML =
    '<i class="bi bi-trash" style="color:red;  font-size:20px"></i>';
  deleteButton.addEventListener("click", (e) => {
    tasklist.removeChild(listItem);
  });




  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  tasklist.appendChild(listItem);
}
