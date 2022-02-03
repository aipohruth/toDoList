//create varaiable
let inputField = document.querySelector('#inputField');
let button = document.querySelector('#btn');
let taskToDo = document.querySelector('#task');

//creating function
button.addEventListener('click', () =>{
    if(inputField.value === ''){
        alert('Task cannot be empty!');
    }
    else{
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    taskToDo.appendChild(paragraph);
    inputField.value='';
    paragraph.classList.add('paragraph-styling');
    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'green';
    })
    paragraph.addEventListener('dblclick', ()=>{
        taskToDo.removeChild(paragraph);
    })
}})
