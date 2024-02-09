import { renderTasks } from './renderTask';
import { getItem, setItem } from './storage';
import { getTasksList, updateTask } from './tasksGateway';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate, id } = tasksList.find((task) => {
    console.log(task);
    console.log(task.id);
    task.id === taskId;
  });
  const done = e.target.checked;

  const updatedTask = {
    id,
    text,
    createDate,
    done,
    finishDate: done
      ? new Date().toISOString()
      : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
