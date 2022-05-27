const todoText = document.getElementById("Todo-text");
const savedbutton = document.getElementById("Save-btn");
const addtaskbutton = document.getElementById("add-btn");
const spaceforlist = document.getElementById("list-space");

let todoArray = [];
let savedIndex = 0;
addtaskbutton.addEventListener("click", (prevent) => {
  prevent.preventDefault();

  if (todoText.value != null && todoText.value != "") {
    todoArray.push(todoText.value);
    todoText.value = "";
    displayList();
  }
});

function displayList() {
  let writeOnHTML = "";
  todoArray.forEach((task, index) => {
    writeOnHTML += `
        <section>
            <p> ${index + 1} ${task}</p>
            <button onclick = "editTask(${index})" type="submit" id = "edit-btn"> Edit</button>
            <button onclick = "deleteTask(${index})" type="submit" id = "delete-btn"> Delete</button>
        </section>`;
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
  todoText.value = "";
  displayList();
}

savedbutton.addEventListener("click", (prevent) => {
  prevent.preventDefault();
 /**/ if (todoText.value != null && todoText.value != "" ) {
    console.log("if called")
    todoArray.splice(savedIndex, 1, todoText.value);
    //todoText.value = "";
    displayList();
  } else {
      alert("Blank not allowed; Please, click on delete instead")
      editTask(savedIndex)
  }
  //todoArray.splice(savedIndex, 1, todoText.value);
 // todoText.value = "";
 // displayList();
  todoText.value = "";
  addtaskbutton.style.display = "inline-block";
  savedbutton.style.display = "none";
});
