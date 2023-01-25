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
  editButton.id = 'edit-button';
 
  editButton.type = "submit";
  editButton.className = "btn";
  editButton.innerHTML =
    '<i class="bi bi-pencil" style="color:blue; font-size:20px;padding-right: 5px;" ></i>';
  
  
editButton.addEventListener('click',(e)=>{
    inputtext.value = tasklist.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent);
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

//"pop-up close window" section
const popOutButton = document.getElementById("button")
const bg_container = document.querySelector(".bg-popContainer")

// Add event listeners 
popOutButton.addEventListener("click", popOutNow);

//document.addEventListener("mouseout", exitmouse);


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