import "./style.css";

if (!(crypto.randomUUID instanceof Function)) {
  crypto.randomUUID = function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };
}

const defaultTasks = [
  // {
  //   title: "Take out the trash",
  //   dueDate: "12-03-2022",
  //   priority: "medium",
  //   checklist: "not completed",
  // },
];

// project creator

const projectFactory = (name) => {
  const projects = document.querySelector(".projects");
  const id = crypto.randomUUID();

  const tasks = JSON.stringify([
    {
      title: "Take out the trash",
      dueDate: "12-03-2022",
      priority: "medium",
      checklist: "not completed",
    },
    {
      title: "Wash plates",
      dueDate: "15-03-2022",
      priority: "high",
      checklist: "not completed",
    },
  ]);

  // const tasks = [];

  const projectDom = () => {
    const para = document.createElement("p");
    para.textContent = name;
    para.setAttribute("data-id", id);
    para.setAttribute("data-tasks", tasks);
    para.addEventListener("click", textContentDom.refreshTasks);

    projects.insertBefore(para, todoDom.addProjectPrompt);
  };

  return { name, projectDom, tasks, id };
};

const todoFactory = (title, dueDate, priority, checklist) => {
  const id = crypto.randomUUID();
  const taskToDom = () => {
    const taskContainer = document.querySelector(".todo");
    const taskHolder = document.createElement("div");
    taskHolder.setAttribute("data-id", id);
    taskHolder.classList.add("todoItem");
    taskHolder.addEventListener("click", todoDom.circleLogic);
    taskHolder.addEventListener("click", todoDom.removeTask);
    // console.log(taskHolder.dataset.id);

    const dot = document.createElement("i");

    dot.classList.add("far", "fa-circle");
    dot.value = checklist;

    taskHolder.appendChild(dot);
    const para = document.createElement("p");
    para.textContent = title;
    taskHolder.appendChild(para);
    const taskDate = document.createElement("input");
    taskDate.textContent = dueDate;
    taskDate.setAttribute("type", "date");
    taskHolder.appendChild(taskDate);
    const taskDeleteIcon = document.createElement("i");

    taskDeleteIcon.classList.add("fas", "fa-times");
    taskHolder.appendChild(taskDeleteIcon);

    taskContainer.appendChild(taskHolder);
  };

  return { title, dueDate, priority, checklist, taskToDom, id };
};

function addProjectDom() {
  const projectName = document.querySelector(".projectCreator").value;
  const project = projectFactory(projectName);
  if (projectName.length > 0) {
    project.projectDom();
    console.log(project.id);
    console.log(project.tasks);
    todoDom.projectCancelBtn();

    // console.log(this);
  } else {
    alert("project name cannot be empty");
  }

  return { project };
}

function addTaskDom() {
  // e.preventDefault();
  const title = document.querySelector(".addTodoInput").value;
  // const taskName = task;

  // const date = document.querySelector(".date-picker").value;
  const task = todoFactory(title, "22-02-2022", "medium", "not completed");
  if (title.length > 0) {
    defaultTasks.push(task);
    // console.log(tasks);
    console.log(this);
    task.taskToDom();

    todoDom.taskCancelBtn();
  } else {
    alert("task name cannot be empty");
  }
}

const textContentDom = (() => {
  const all = document.querySelector(".all");
  const today = document.querySelector(".today");
  const this_week = document.querySelector(".this_week");
  const todo_header = document.querySelector(".todo_header");

  all.addEventListener("click", changeName);
  today.addEventListener("click", changeName);
  this_week.addEventListener("click", changeName);

  const timeFilteredProjects = document.querySelectorAll("aside > p");

  Array.from(timeFilteredProjects).forEach((project) => {
    project.addEventListener("click", changeName);
  });
  function changeName() {
    todo_header.textContent = this.textContent;
    // console.log(this);
  }

  const taskContainer = document.querySelector(".todo");
  const defaultz = document.querySelector(".test");
  defaultz.addEventListener("click", () => {
    removeAllChildNodes();
    refreshTasks();
  });

  const random = document.querySelector(".random");
  random.addEventListener("click", (e) => {
    console.log(e.target);
  });

  function changeName() {
    console.log(this);
  }

  function refreshTasks(e) {
    removeAllChildNodes();
    const projectTasks = JSON.parse(e.target.dataset.tasks);
    // const projectTasks = e.target.dataset.tasks;
    console.log(projectTasks);
    todo_header.textContent = this.textContent;

    projectTasks.forEach((task) => {
      const newTask = todoFactory(
        task.title,
        task.dueDate,
        task.priority,
        task.checklist
      );
      console.log(newTask);
      console.log(projectTasks);
      newTask.taskToDom();
    });

    todoDom.task_add_btn.addEventListener("click", () => {
      const title = document.querySelector(".addTodoInput").value;

      const aTask = todoFactory(title, "22-02-2022", "medium", "not completed");

      aTask.taskToDom();
      console.log(aTask);
      // projectTasks.push(aTask);
    });

    // todoDom.task_add_btn.addEventListener("click", testRun);
  }

  function testRun() {
    const title = document.querySelector(".addTodoInput").value;

    const aTask = todoFactory(title, "22-02-2022", "medium", "not completed");

    // console.log(typeof projectTasks);
    // projectTasks.push(aTask);
    aTask.taskToDom();
    console.log(aTask);
  }

  function refreshTasks2(e) {
    todo_header.textContent = this.textContent;
    // let projectID = e.target.dataset.id;
    // console.log(projectID.tasks);
  }

  function removeAllChildNodes() {
    while (taskContainer.firstChild) {
      taskContainer.removeChild(taskContainer.firstChild);
    }
  }
  return { changeName, refreshTasks };
})();

const todoDom = (() => {
  // Projects
  const addProjectPrompt = document.querySelector(".addProjectPrompt");
  const addProjectContainer = document.querySelector(".addProjectContainer");

  const project_cancel_btn = document.querySelector(".project-cancel-btn");

  addProjectPrompt.addEventListener("click", newProjectPrompt);

  const project_add_btn = document.querySelector(".project-add-btn");
  project_add_btn.addEventListener("click", addProjectDom);

  project_cancel_btn.addEventListener("click", projectCancelBtn);

  function projectCancelBtn() {
    document.querySelector(".projectCreator").value = "";
    addProjectContainer.setAttribute("style", "display:none");
    addProjectPrompt.setAttribute("style", "display:block");
  }

  function newProjectPrompt() {
    addProjectContainer.setAttribute("style", "display:block");
    addProjectPrompt.setAttribute("style", "display:none");
  }

  // TASKS
  const addTodoContainer = document.querySelector(".addTodoContainer");
  const addTodoPrompt = document.querySelector(".addTodoPrompt");

  const task_add_btn = document.querySelector(".task-add-btn");
  // task_add_btn.addEventListener("click", addTaskDom);
  const task_cancel_btn = document.querySelector(".task-cancel-btn");

  addTodoPrompt.addEventListener("click", newTaskPrompt);

  task_cancel_btn.addEventListener("click", taskCancelBtn);

  function taskCancelBtn() {
    document.querySelector(".addTodoInput").value = "";
    addTodoContainer.setAttribute("style", "display:none");
    addTodoPrompt.setAttribute("style", "display:block");
  }

  function newTaskPrompt() {
    addTodoContainer.setAttribute("style", "display:block");
    addTodoPrompt.setAttribute("style", "display:none");
  }

  // Task circle and delete dom stuff

  const todoItem = document.querySelector(".todoItem");
  todoItem.addEventListener("click", circleLogic);
  todoItem.addEventListener("click", removeTask);

  // const deleteBtn = document.querySelector('.')

  function circleLogic(e) {
    if (e.target.classList.contains("fa-circle")) {
      e.target.classList.toggle("clicked-circle");
      e.target.parentElement.classList.toggle("clicked-text");
    }
  }

  function removeTask(e) {
    if (e.target.classList.contains("fa-times")) {
      let taskId = e.target.parentElement.dataset.id;
      console.log(taskId);
      e.target.parentElement.remove();
    }
  }

  return {
    circleLogic,
    addProjectPrompt,
    addProjectContainer,
    addTodoContainer,
    addTodoPrompt,
    projectCancelBtn,
    taskCancelBtn,
    removeTask,
    task_add_btn,
  };
})();
