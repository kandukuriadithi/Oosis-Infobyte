let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// Enable button only if input has value
input.addEventListener('keyup', () => {
    if (input.value.trim() !== '') {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

// Add new task
addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        
        tasks.appendChild(newItem);
        input.value = '';
        addBtn.classList.remove('active'); // Disable button after adding task
    } else {
        alert('Please enter a task');
    }
});

// Remove task (Delete button fix)
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
    }
});

// Mark task as completed (toggle)
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});
