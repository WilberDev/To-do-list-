const todoText = document.getElementById("Todo-text");
const savedbutton = document.getElementById("Save-btn");
const addtaskbutton = document.getElementById("add-btn");
const spaceforlist = document.getElementById("list-space");

const todoArray = [];
let savedIndex = 0;

//Testing methods
addtaskbutton.addEventListener("click", (prevent) => {
  prevent.preventDefault();
  if (todoText.value != null && todoText.value != "") {
    todoArray.push(todoText.value);
    cleanInput();
    displayList();
  }
});
function displayList() {
  let writeOnHTML = "";
  todoArray.forEach((task, index) => {
    writeOnHTML += `
            <p> ${index + 1} ${task}</p>
            <button onclick = "editTask(${index})" type="submit" id = "edit-btn" class = "edit-btn" > Edit</button>
            <button onclick = "deleteTask(${index})" type="submit" id = "delete-btn" class = "delete-btn"> Delete</button>
    `;
  });
  spaceforlist.innerHTML = writeOnHTML;
}
function editTask(taskIndex) {
  savedIndex = taskIndex;
  todoText.value = todoArray[taskIndex];
  addtaskbutton.style.display = "none";
  savedbutton.style.display = "inline-block";
}

function deleteTask(taskIndex) {
  todoArray.splice(taskIndex, 1);
  cleanInput();
  displayList();
}

/**/ savedbutton.addEventListener("click", (prevent) => {
  prevent.preventDefault();
  if (todoText.value != null && todoText.value != "") {
    console.log("if called");
    todoArray.splice(savedIndex, 1, todoText.value);
    displayList();
  } else {
    alert("Blank not allowed; Please, click on delete instead");
    editTask(savedIndex);
  }
  addtaskbutton.style.display = "inline-block";
  savedbutton.style.display = "none";
  cleanInput();
});

function cleanInput() {
  return (todoText.value = "");
}
