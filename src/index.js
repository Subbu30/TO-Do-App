const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container")



const addItem = () => {
    if (inputBox.value === "") {
        alert("You need to write something!");
    } else {
        let exists = false;
       // console.log(taskContainer.textContent)
        taskContainer.querySelectorAll("li").forEach(item => {
            if (item.textContent.toLowerCase().replace(/×/g, '') === inputBox.value.toLowerCase()) {
                exists = true;
                
            }
        });
        
        if (exists) {
            alert("Item already exists");
        } else {
            const li = document.createElement("li");
            li.innerHTML = inputBox.value;
            taskContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
    }
    inputBox.value = "";
    saveData();
}

taskContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)
function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML)
}
function getData() {
    taskContainer.innerHTML = localStorage.getItem("data")
}
getData()
