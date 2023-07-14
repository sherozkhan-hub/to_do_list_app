const input = document.querySelector('.put')
const form = document.querySelector('form')
const list = document.querySelector('ul')
const search = document.querySelector('.search input')
let li;

function updateUI(filteredArray){
    list.innerHTML='';

    if(filteredArray && filteredArray.length>0){
        filteredArray.forEach((item)=>{
            list.appendChild(item)
        })
    }
    // else{
    //     list.style.display='none';
    //     console.log('nothing')
    // }
    
}

search.addEventListener('keyup', (e)=>{
    let newList=Array.from(list.children)

    let final = newList.filter(item =>{
        const name = item.children[0];
       return name.innerText.includes(e.target.value)
    })

    if(e.target.value === ''){
     final =[];
    //  list.style.display ='none'
    //  console.log(e.target.value);
    }

    updateUI(final);
    
})

function addTask(){
    li = document.createElement('li');
    li.innerHTML = ` <span>${input.value}</span>
                        <button class="delete btn">Delete</button>
                        <input type='checkbox' />
                        `;

    list.appendChild(li);
    updateUI(Array.from(list.children)); 
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTask();                  
    input.value=null;

// Delete button
    const deleteBtn = li.children[1];
      deleteBtn.addEventListener('click', (e)=>{
            e.target.parentNode.remove()
    })

// Edit the text
    const editBtn = li.children[2];
    let check= false
      editBtn.addEventListener('change', (e)=>{
        check =!check;
        e.target.parentNode.children[0].style.textDecoration = check? 'line-through' : ''
        e.target.parentNode.children[0].style.color = check? 'red' : ''
    })
})  

