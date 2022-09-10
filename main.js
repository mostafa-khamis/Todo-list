let input = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task span'),
    taskContainer = document.querySelector('.tasks-content'),
    tasksCount = document.querySelector('.tasks-count span'),
    tasksCompleted = document.querySelector('.tasks-completed span');

window.onload = function() {
    input.focus();
}

addButton.onclick = function() {



    if (input.value === '') {
        // use sweet alert
    } else {
        let noTask = document.querySelector('.no-tasks-message');

        if (document.body.contains(document.querySelector('.no-tasks-message'))) {
            noTask.remove();

        }

        let mainSpan = document.createElement('span'),
            deleteElement = document.createElement('span'),
            mainSpanText = document.createTextNode(input.value),
            deleteText = document.createTextNode('delete');

        mainSpan.appendChild(mainSpanText);
        mainSpan.className = 'task-box';

        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';

        mainSpan.appendChild(deleteElement);
        taskContainer.appendChild(mainSpan);
        theInput.value = '';


        theInput.focus();


        calculateTasks();
    }
};
document.addEventListener('click', function(e) {


    if (e.target.className == 'delete') {


        e.target.parentNode.remove();


        if (taskContainer.childElementCount == 0) {

            createNoTasks();

        }

    }


    if (e.target.classList.contains('task-box')) {


        e.target.classList.toggle("finished");

    }


    calculateTasks();

});

function createNoTaskMessege() {
    let msgspan = document.createElement('span');
    msgspan.className = 'no-tasks-message';
    let text = document.createTextNode('No tasks to show');
    msgspan.appendChild(text);
    taskContainer.appendChild(msgspan);
}

function calculateTasks() {


    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;


    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}