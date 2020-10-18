// TODO List
const list = document.querySelector(".list_ol");
const content = document.querySelector(".list");
let liArray = [];
let counter = 0;
let taskToDelete = 0;

let tasks = [];

const buttonAdd = document.querySelector(".list_sumbit_form_button_create");

const buttonDelete = document.createElement("button");
buttonDelete.textContent = "Usuń";
buttonDelete.classList.add("list_sumbit_form_button_delete");


buttonAdd.onclick = function() {
  let singleTask = document.querySelector(".list_sumbit_form_label").value;
  document.querySelector(".list_sumbit_form_label").value = ""; 
  addTask(singleTask);
  return false;
}

buttonDelete.onclick = function() {
  removeTask(taskToDelete);
  console.log("Deleted!");
  return false;
}

list.addEventListener("mouseover", function( event ) {   
  if(event.target.classList == "list_ol--displaySettings") {
    event.target.appendChild(buttonDelete);
    taskToDelete = event.target.id;
    
  }
  // console.log(event.target);
  // console.log(event.target.id);
  // console.log(buttonDelete.childNodes.length); 
}, false);

list.addEventListener("mouseleave", function( event ) {   
   setTimeout(function() {
     buttonDelete.remove();
   }, 1000); 
}, false);

function removeTask(taskNumber) {
  liArray[taskNumber].remove(); 
}

function addTask(task) {
  const li = document.createElement("li");
  li.id = counter++;
  li.classList.add("list_ol--displaySettings");
  li.textContent = task;
  list.appendChild(li);
  liArray.push(li);
  console.log("Added!");
}

// function arrayToLocalStorage(array) {
//   let string = "";
//   for(let i = 0; i < array.length; i++) {
//     string += array[i].textContent + ",";
//   }

//   console.log("string: " + string);
//   localStorage.setItem("liArray", string);
// }

// function localStorageToArray() {
//   let string = localStorage.getItem("liArray");

//   console.log("LocalStoreGet: " + string);
//   array = string.split(",");

//   //console.log("local to array: " + liArray);
// }