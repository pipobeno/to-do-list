let task = document.getElementById('task');
let submit = document.querySelector('#submit');
let result = document.getElementById('result');
  

function submitTask() {
    let task = document.getElementById("task").value;
    if (task.trim() !== "") {
      let result = document.getElementById("result");
      result.innerHTML += "<p>" + task + "</p>";
    }
  }
  