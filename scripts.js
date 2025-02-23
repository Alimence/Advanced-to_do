let tasks = ["Buy milk" , "Clean the room" ,"go to the gym"];

            const displayTasks = () => {
                let textDisplay = document.querySelector('#taskDisplay');
                taskDisplay.innerHTML = '';
                tasks.forEach((task) => {
                    const taskItem = document.createElement('li');
                    taskItem.classList.add('bg-blue-200' ,'p-2', 'm-2', 'rounded-lg', 'decoration-none' , 'list-none');
                    taskItem.textContent = task;
                    taskDisplay.appendChild(taskItem);
                });
            };

            const addTask  = () => {
                const newTaskInput = document.querySelector('#newTask');
                const newTask = newTaskInput.value;
                
                if (newTask.trim() !== ""){
                    tasks.push(newTask);
                    newTaskInput.value = "";
                    displayTasks();
                } else {
                    alert('Please enter a task');
                }
            
            }
            const addTaskButton = document.querySelector('#addtaskbutton'); 
            addtaskbutton.addEventListener('click', addTask);

            displayTasks();
            