let tasks = [];

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Selesai';
        completeBtn.onclick = function() {
            tasks[index].completed = true;
            renderTasks();
        };
        
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }

        li.appendChild(completeBtn);
        taskList.appendChild(li);
    });
}

document.getElementById('filter-completed').addEventListener('click', function() {
    const completedTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(completedTasks);
});

document.getElementById('filter-pending').addEventListener('click', function() {
    const pendingTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(pendingTasks);
});

function renderFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    filteredTasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }
        taskList.appendChild(li);
    });
}

document.getElementById('clear-completed').addEventListener('click', function() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
});