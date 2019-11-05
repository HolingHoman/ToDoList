let
    todoList = [],
    input = document.querySelector('.input-task'),
    btn = document.querySelector('.btn-add'),
    todo = document.querySelector('.todolist')
;
if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    AddTask();
}
todo.addEventListener('change', function (event) {
    let targaet = event.target;
    let idTarget = targaet.getAttribute('id');
    let ooo = todo.querySelector(`#${idTarget}_label`);
    let y = ooo.textContent;
    todoList.forEach(function (item){
        if(item.todo == y){
            item.checked = !item.checked;
        }
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
});
btn.addEventListener('click', function(event){
    let temp = {
        todo: input.value,
        checked: false
    };
    todoList.push(temp);
    AddTask();
});
function AddTask() {
    let ul = '';
    todoList.forEach(function (item, index){
    ul += `
    
    <li id="item_${index}_label">${item.todo}<input id="item_${index}" type="checkbox" ${item.checked ? 'checked' : ''}></li>
    
    `;
    });
    todo.innerHTML = ul;
    localStorage.setItem('todo', JSON.stringify(todoList));
}