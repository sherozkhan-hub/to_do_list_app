const input = document.querySelector(".put");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const search = document.querySelector(".search input");
let arr = [];

function addTask(item) {
  let li = document.createElement("li");
  li.innerHTML = ` <span>${item}</span>
                          <button class="delete btn">Delete</button>
                          <input type='checkbox' />
                          `;
  list.appendChild(li);

  // Delete button
  const deleteBtn = li.children[1];
  deleteBtn.addEventListener("click", (e) => {
    const deletedItem = e.target.parentNode.firstChild.textContent;
    e.target.parentNode.remove();
    const index = arr.indexOf(deletedItem);
    if (index > -1) {
      arr.splice(index, 1);
    }
  });

  // Edit the text
  const editBtn = li.children[2];
  let check = false;
  editBtn.addEventListener("change", (e) => {
    check = !check;
    const textItem = e.target.parentNode.children[0];
    textItem.style.textDecoration = check ? "line-through" : "";
    textItem.style.color = check ? "red" : "";
  });
}

function updateUI(filteredArray) {
  list.innerHTML = "";

  filteredArray.forEach((task) => {
    addTask(task);
  });
}

search.addEventListener("keyup", (e) => {
  let final = arr;
  if (e.target.value !== "") {
    final = arr.filter((item) => {
      let value = e.target.value.toLowerCase();
      return item.includes(value);
    });
  }
  console.log("final: ", final);
  updateUI(final);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  arr.push(input.value);
  input.value = null;
});
