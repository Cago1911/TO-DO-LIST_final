const groceryInputone = document.querySelector('.grocery-input');
const groceryInputtwo = document.querySelector('.date');
const groceryButton = document.querySelector('.grocery-button');
const groceryList = document.querySelector('.grocery-list');

groceryButton.addEventListener('click',addGrocery);
groceryList.addEventListener('click', deleteCheck);





function addGrocery(event){
    //micanje mogucnosti submitanja
    event.preventDefault();
    //div liste
    const groceryDiv = document.createElement('div');
    groceryDiv.classList.add("grocery");
    //kreiranje liste
    const newGrocery = document.createElement('li');
    newGrocery.innerText = groceryInputone.value +" "+ groceryInputtwo.value;
    newGrocery.classList.add('grocery-item');
    groceryDiv.appendChild(newGrocery);
    //botun 1
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    groceryDiv.appendChild(completedButton);
    //botun 2
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    groceryDiv.appendChild(deleteButton);
    //botun3
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-btn");
    groceryDiv.appendChild(editButton);
    //button4
    const stopeditButton = document.createElement('button');
    stopeditButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    stopeditButton.classList.add("confirm-btn");
    groceryDiv.appendChild(stopeditButton);
    //append u listu
    groceryList.appendChild(groceryDiv);
    //ocisti ulaz
    groceryInput.value="";
}

function deleteCheck(e)
{
    const item = e.target;
    //brisanje
    if(item.classList[0] === 'delete-btn')
    {
        const grocery = item.parentElement;
        //animacija
        grocery.classList.add("fall");
        grocery.addEventListener('transitioned', function()
        {
            grocery.remove();
        });
    }

    //odradeno
    if(item.classList[0] === 'complete-btn')
    {
        const grocery = item.parentElement;
        grocery.classList.toggle("completed");
    }

    //edit
    if(item.classList[0] === 'edit-btn')
    {
        const grocery = item.parentElement;
        grocery.contentEditable = "true";
    }
    if(item.classList[0] === 'confirm-btn')
    {
        const grocery = item.parentElement;
        grocery.contentEditable = "false";
    }
    
}