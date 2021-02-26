const todoList = document.querySelector("ul");
const addBtn = document.querySelector("button");
const addInput = document.querySelector("input");

addBtn.addEventListener("click", () => {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `
            <i class="fas fa-trash"></i>
            ${addInput.value}`;
  todoList.appendChild(todoItem);
  addInput.value = "";
});

todoList.addEventListener("click", (e) => {
  e.target.parentElement.nodeName === "LI" && e.target.parentElement.remove();
  e.stopPropagation();
  e.target.classList.toggle("completed");
});
