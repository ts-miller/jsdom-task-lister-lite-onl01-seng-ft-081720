document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const newTask = document.querySelector("#new-task-description").value
    taskList.innerHTML += `<li>${newTask}</li>`
    taskForm.reset()
  })
})
