// função que adiciona tarefa
function addTask(){
    // título da tarefa
    const taskTitle = document.querySelector('#task-title').value //pegamos o valor que será enviado nesse input

    // A validação if(taskTitle) evita de adicionar uma tarefa vazia
    if(taskTitle) {
        //clona template
        const template = document.querySelector('.template') 
        
        const newTask = template.cloneNode(true)
       

        //adiciona titulo 
        newTask.querySelector('.task-title').textContent = taskTitle
        
        //remover as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)
        
        //remover a tarefa
        const removeTaskLabel = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this)
        })
        

        // função completar tarefa 
        const doneTask = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = ''
        //Por padrão, a tag responsável por mostrar as tarefas está oculta, ao adicionar uma tarefa removemos a classe responsável por ocultá-la
    }

}

//Função remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}

function completeTask(task){
    
    const taskComplete = task.parentNode

    taskComplete.classList.toggle('done')
}

// evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {

    e.preventDefault() //Esta função serve para não disparar a configuração padrão automaticamente
    addTask()

})
