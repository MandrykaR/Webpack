import {
   renderTasks
} from "./list/renderTask.js"
import {
   setItem
} from "./list/storage.js";
import {
   getTasksList
} from "./list/tasksGateway.js";
import {
   initTodoListHandlers
} from "./list/todoList.js"
import './styles.scss';


document.addEventListener('DOMContentLoaded', () => {
   getTasksList()
      .then(tasksList => {
         setItem('tasksList', tasksList)
         renderTasks();
      })

   initTodoListHandlers()
})

const onStarageChange = e => {
   if (e.key === 'tasksList') {
      renderTasks();
   }
}

window.addEventListener('storage', onStarageChange);