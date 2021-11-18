import getPage from './functions/getPage.js'
import renderPage from './functions/renderPage.js'
let showingTasks = false
const tasksButton = document.getElementById('tasks__button')
const tasks = document.getElementById('tasks')
const pagesContainer = document.getElementById('main')

let currentPage = {
  name: 'index',
  html: '',
  styleLink: {},
  scriptLink: {}
}

const tasksHandler = (tasks, tasksButton, showingTasks) => {
  if (showingTasks) {
    tasksButton.querySelector('i').classList.remove('fa-times')
    tasksButton.querySelector('i').classList.add('fa-tasks')
    tasks.classList.remove('display-block')
    tasks.classList.add('display-none')
  } else {
    tasksButton.querySelector('i').classList.remove('fa-tasks')
    tasksButton.querySelector('i').classList.add('fa-times')
    tasks.classList.remove('display-none')
    tasks.classList.add('display-block')
  }
  return !showingTasks
}

tasksButton.addEventListener('click', () => {
  showingTasks = tasksHandler(tasks, tasksButton, showingTasks)
})

tasks.addEventListener('click', async evt => {
  const taskClicked = evt.target.closest('a')
  if (!taskClicked) return
  if (currentPage.name !== 'index') {
    pagesContainer.innerHTML = ''
    currentPage.styleLink.remove()
    currentPage.scriptLink.remove()
  }
  currentPage = await getPage(taskClicked.getAttribute('href'))
  renderPage(currentPage, pagesContainer)
  showingTasks = tasksHandler(tasks, tasksButton, true)
})

addEventListener('DOMContentLoaded', async evt => {
  if (!location.hash) {
    currentPage = await getPage('#cover')
    renderPage(currentPage, pagesContainer)
    return
  }
  const taskLink = location.hash
  const task = [...tasks.querySelectorAll('.task')].find(
    task => task.getAttribute('href') === taskLink
  )
  task ? task.click() : (location.href = './')
})
