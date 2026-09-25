let tasks= JSON.parse(localStorage.getItem('tasks')) || []; 
const form = document.getElementById('task-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.querySelector('#task-form input[type="text"]');
    const taskText = textInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    saveTasks();

    textInput.value = '';
    renderTasks();
});
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(function(task, index) {
        if (currentFilter === 'pending' && task.completed) return;
        if (currentFilter === 'completed' && !task.completed) return;
        if (searchText !== '' && !task.text.toLowerCase().includes(searchText)) return;
         const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Done';
        completeBtn.addEventListener('click', function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            const newText = prompt('Edit task:', tasks[index].text);
            if (newText !== null && newText.trim() !== '') {
                tasks[index].text = newText;
                saveTasks();
                renderTasks();
            }
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);


        if (task.completed) {
            li.classList.add('completed');
        }

        taskList.appendChild(li);
    });
    const totalCount = tasks.length;
    const completedCount = tasks.filter(function(task) {
        return task.completed;
    }).length;
    const pendingCount = totalCount - completedCount;

    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('completed-count').textContent = completedCount;
    document.getElementById('pending-count').textContent = pendingCount;
}
let currentFilter = 'all';
let searchText = '';

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        currentFilter = button.dataset.filter;
        renderTasks();
    });
});
const searchInput = document.getElementById('search-inputs');

searchInput.addEventListener('input', function() {
    searchText = searchInput.value.toLowerCase();
    renderTasks();
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
renderTasks();