const form = document.getElementById("listForm");
const taskList = document.getElementById("taskList");
const filterSelect = document.getElementById("filterSelect");

let tasks = [];
let currentFilter = "all";

// ================= AGREGAR TAREA =================
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = document.getElementById("task").value;
    const priority = document.getElementById("priority").value;

    tasks.push({
        text,
        priority,
        completed: false
    });

    form.reset();
    renderTasks();
});

// ================= FILTRO =================
filterSelect.addEventListener("change", function () {
    currentFilter = this.value;
    renderTasks();
});

// ================= RENDER =================
function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
    }

    // Ordenar por prioridad
    filteredTasks.sort((a, b) => a.priority - b.priority);

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <input 
                    type="checkbox"
                    class="complete-box"
                    ${task.completed ? "checked" : ""}
                    onclick="toggleComplete(${index})"
                >

                <span class="
                    ${task.completed ? "completed" : ""}
                    priority-${task.priority}
                ">
                    ${task.text} (Prioridad: ${priorityText(task.priority)})
                </span>

                ${task.completed ? `<span class="completed-x">❌</span>` : ""}
            </div>

            <div class="actions">
                <button onclick="editTask(${index})">✏️</button>
                <button onclick="deleteTask(${index})">🗑️</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// ================= COMPLETAR =================
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// ================= ELIMINAR =================
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// ================= EDITAR =================
function editTask(index) {
    const currentTask = tasks[index];

    const newText = prompt("Editar tarea", currentTask.text);
    if (newText === null || newText.trim() === "") return;

    const newPriority = prompt(
        "Editar prioridad:\n1 = Alta\n2 = Media\n3 = Baja",
        currentTask.priority
    );

    if (!["1", "2", "3"].includes(newPriority)) {
        alert("Prioridad inválida");
        return;
    }

    currentTask.text = newText;
    currentTask.priority = parseInt(newPriority);

    renderTasks();
}


// ================= PRIORIDAD TEXTO =================
function priorityText(value) {
    if (value == 1) return "Alta";
    if (value == 2) return "Media";
    return "Baja";
}
