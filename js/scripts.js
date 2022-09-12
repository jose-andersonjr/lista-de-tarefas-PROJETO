// função que adiciona tarefa
function addTask(){
    // título da tarefa
    const taskTitle = document.querySelector('#task-title').value //pegamos o valor que será enviado nesse input
    console.log(taskTitle)

    if(taskTitle) {
        //clona template
        const template = document.querySelector('.template') //!!!!Não estou conseguindo pegar o 'template'
        
        const newTask = template.cloneNode(true)
       

        //adiciona titulo 
        newTask.querySelector('.task-title').textContent = taskTitle
        
        //remover as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)

    }

}

// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {

    e.preventDefault()
    addTask()

})
