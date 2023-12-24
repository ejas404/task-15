
const todoList = document.getElementById('todoList')
const input = document.getElementById('todoInput')
const button = document.getElementById('todoBtn')
const deleteButton = document.getElementById('deleteButton')
let listArray;



function loadList(){
    let res = ""
    let i = 0;
    for (let each of listArray){
      res+=  `<li>${each} <button onclick="deleteItem(${i})" id="deleteButton">x</button> </li>`
      i++;
    }

    todoList.innerHTML = res
}


button.addEventListener('click',()=>{
   if(input.value.trim() === ""){return}

   listArray.unshift(input.value.trim())
   input.value = ""
   
   loadList()
   addToStorage()
})


function deleteItem(id){
  listArray.splice(Number(id),1)
  addToStorage()
  loadList()
}

function addToStorage(){
    if(!listArray) return ;
    localStorage.setItem('todo-list',JSON.stringify(listArray))
}

function getList(){
   let list =  localStorage.getItem('todo-list')
   listArray = JSON.parse(list)
}

getList()
loadList()