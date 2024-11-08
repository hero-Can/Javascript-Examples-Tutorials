let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let addBtn = document.getElementById("add-btn");


addBtn.onclick = function(){
    if (inputBox.value === "") {
        window.alert("please enter a text")
    }else{
        let li = document.createElement("li");
        // let text = document.createTextNode("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveData();
}

// This way, it works for both existing and newly added <li> elements.
listContainer.addEventListener('click',function (e) {
    if (e.target.tagName === 'LI') {
         e.target.classList.toggle('checked');  // Add the 'checked' class to the clicked <li>
         saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData() {
    window.localStorage.setItem('data',listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = window.localStorage.getItem('data');
}

showTask();







// why this code not work
//  is that you are querying the list items (ul li) before any <li> elements are dynamically added to the ul. 
// The querySelectorAll() method returns a static NodeList of all <li> elements that exist at the time the script runs. 
// If you add new <li> elements later on (e.g., via a form or a button click), they won’t be part of the NodeList 
// returned by querySelectorAll() because the NodeList is not updated automatically.

// let lists = document.querySelectorAll("ul li");
//     lists.forEach((li) => {
//         li.addEventListener("click",(e)=> {
//             e.currentTarget.classList.toggle('checked'); 
//         });  
//     });