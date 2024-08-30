const inptBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// List of ToDo's
let toDoLists = [];

// Create task
const creatList = (_value) => {
  const li = document.createElement('li');
  li.innerHTML = _value;
  const icon = `<span class="material-symbols-outlined" data-index=${toDoLists.length}>delete</span>`;
  li.insertAdjacentHTML('beforeend', icon);
  return li;
};

// Add task
const addTask = () => {
  if (inptBox.value === '') {
    alert('You must write somethings!');
  } else {
    toDoLists.push(inptBox.value);
    saveDate();
    listContainer.appendChild(creatList(inptBox.value));
    inptBox.value = '';
  }
};

// Add button listener
listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      toDoLists.splice(e.target.dataset.index - 1, 1);
      saveDate();
    }
  },
  false
);

// Save task on storage
const saveDate = () => {
  localStorage.setItem('ToDoList', JSON.stringify(toDoLists));
};

// fetch task from storage
window.addEventListener('load', () => {
  const data = localStorage.getItem('ToDoList');
  if (!data) return;
  toDoLists = [...JSON.parse(data)];
  toDoLists.map((list) => listContainer.appendChild(creatList(list)));
});
