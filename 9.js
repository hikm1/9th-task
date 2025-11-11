let tasks = ["Azkar Sabah","Study Biology","Recite Quran","Watch Tutorial"];

function showTasks(){
  let list = document.getElementById("task-list");
  list.innerHTML = "";

  for(let i=0;i<tasks.length;i++){
    let li = document.createElement("li");
    li.textContent = tasks[i];
    li.onclick = () => li.classList.toggle("completed");
    list.appendChild(li);
  }
}

function addTask(){
  let input = document.getElementById("task-input");
  let newTask = input.value.trim();
  if(newTask !== ""){
    tasks.push(newTask);
    input.value = "";
    showTasks();
  }else{
    alert("Please write something first!");
  }
}

document.getElementById("add-btn").onclick = addTask;

showTasks();