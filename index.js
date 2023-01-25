let tasklist = document.getElementById("tasklist");
let inputtext = document.getElementById("Input1");
let saveItem = "";
let addButton = document.getElementById("btn-add");
let editButton = document.getElementById("btn-edit");
//editButton.disabled=true;

// Add Function
function onAddTask(e) {
  e.preventDefault();
  if(inputtext.value==='') alert('Please add your Task')
  else{
  //creating list Item
  let listItem = document.createElement("li");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  let label = document.createElement("label");
  label.innerText = inputtext.value;
  inputtext.value = "";

  let editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.className = "btn";
  editButton.innerHTML =
    '<i class="bi bi-pencil" style="color:blue; font-size:20px;padding-right: 5px;" ></i>';

  editButton.addEventListener("click", (e) => {
    
    saveItem = listItem;
    if(saveItem.childNodes[0].checked){
      console.log(saveItem.childNodes[0].checked)
     alert('Please uncheck the Task to Edit')
    }
    else{
      addButton.disabled = true;
    inputtext.value = listItem.innerText;
    }
  });

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
  //Appending list item to Unorderred list
  tasklist.appendChild(listItem);
}
}
//Update Function
function onUpdateTask(e) {
  e.preventDefault();
  addButton.disabled=false;
  
  if(saveItem.childNodes[0].checked){
 
   alert('Please uncheck the Task to Edit')
  }
  console.log( inputtext.value.lenth===0)
  //if(inputtext.value==='') alert('Please select Task to Edit')
  if(inputtext.value!=""){
  saveItem.childNodes[1].innerText = inputtext.value;
  inputtext.value = "";
  }
  else alert('Please select Task to Edit');
  
}
