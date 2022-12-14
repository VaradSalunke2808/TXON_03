const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
var flag = true;
var edit = true;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (task === "" || task === null) {
        alert("Please enter a task");
    }
    else {

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);
        //Creating an icon
        const fav_icon = document.createElement('i');
        fav_icon.setAttribute("class", "fa-regular fa-clock")
        fav_icon.setAttribute("id", "complete")
        task_content_el.appendChild(fav_icon);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('i');
        task_edit_el.setAttribute("class", "fa-solid fa-pen-to-square")


        const task_delete_el = document.createElement('i');
        task_delete_el.setAttribute("class", "fa-solid fa-trash");


        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (edit) {
                task_edit_el.removeAttribute("class");
                task_edit_el.setAttribute("class", "fa-solid fa-floppy-disk");
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                edit = false;
            } else {

                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.removeAttribute("class");
                task_edit_el.setAttribute("class", "fa-solid fa-pen-to-square")
                edit = true;
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        task_content_el.addEventListener('dblclick', (e) => {

            if (flag) {
                fav_icon.removeAttribute("class")
                fav_icon.setAttribute("class", "fa-solid fa-check");
                flag = false;
            }
            else {
                fav_icon.removeAttribute("class")
                fav_icon.setAttribute("class", "fa-regular fa-clock");
                flag = true;
            }
        });
    }

});
//Remove all Tasks
function removeAll() {
    const task_list = document.querySelectorAll('.task');
    if (task_list === null || task_list.length === 0) {
        alert("No tasks found!");
    }
    else {
        if (confirm("Do you want to delete all your tasks?"))
            list_el.innerHTML = "";
    }
}
