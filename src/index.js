document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// get the form element and input field
const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');

// add event listener to form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from refreshing the page

  const task = input.value; // get the task value from input field
  input.value = ''; // clear input field

  const list = document.getElementById('tasks'); // get the list element
  const li = document.createElement('li'); // create a new list item
  li.textContent = task; // set the text content of the list item to the task

  list.appendChild(li); // add the list item to the list
});
