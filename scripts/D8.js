//funzione che cancella "la task" nella lista
const deleteTask = function (e) {
    console.log("task fatta", e)
    const li = e.target.closest("li")
    li.style.textDecoration = "line-through"
    li.style.opacity = "0.6"

}

const removeTask = function (e) {
    const li = e.target.closest("li")
    li.remove()
    li.style.textDecoration = "line-through"
}



const formInput = document.getElementById("add-task")

const mainForm = document.getElementById("main-form")

mainForm.addEventListener("submit", function (e) {

    e.preventDefault()

    const toDo = formInput.value.trim()
    if (toDo === "") return

    console.log(toDo)

    const item = document.createElement("li")

    item.innerHTML = `
   ${toDo} 
   <button type="button" onclick="deleteTask(event)">Fatto</button>
   <button type="button"  onclick="removeTask(event)">Elimina </button>

`


    const container = document.getElementById("note-book")
    container.appendChild(item)

    mainForm.reset()
})