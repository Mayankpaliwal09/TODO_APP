const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


// function mathRandom(){
//   const r = Math.floor( Math.random() * 256) ;
//   const g = Math.floor( Math.random() * 256) ;
//   const b = Math.floor( Math.random() * 256) ;

//         return  `rgb ${r} ,${g} ,${b}`
// }

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;

  if(newTodoText === ""){
    alert('please add some task');
  }else{
    const newLi = document.createElement("li");

  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  
    todoList.append(newLi);
  todoInput.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through solid red";
   }
 
   if (e.target === classList.contains("done")) {
    // const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "";
   }
 
   

  
});
