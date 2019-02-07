// Initilising variables
var ul = document.getElementById('list')
var li;
var text;
let data = localStorage.getItem('todo')
var jsonObj

// This function initilises list on window
function Initilisar() {
    list.forEach((element, i) => {
        li = document.createElement('a')
        text = document.createTextNode(element)
        li.setAttribute("draggable","true")
        li.appendChild(text)

        if(jsonObj.done[i]){
            li.setAttribute('class', 'mylist collection-item active')
        }
        else {
            li.setAttribute('class', 'mylist collection-item')
        }
        ul.insertBefore(li, ul.firstChild)
    });
}

// Reteving data if present or initilising json object
if(!data){
    jsonObj = {
        list:[],
        done:[]
    }
}
else{
    jsonObj = JSON.parse(data)
    list = jsonObj.list
    Initilisar()
}

// Remove done once
var RmList = [];
function RemoveDoen() {
    list = jsonObj.list
    list.forEach((element, i) => {
        if(jsonObj.done[i]==1){
            RmList.unshift(i)
         }
    });
    RmList.forEach( function(element) {
        jsonObj.done.splice(element, 1)
        jsonObj.list.splice(element, 1)
    });
    localStorage.setItem('todo', JSON.stringify(jsonObj))

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
    Initilisar()
}    

// Remove all
function RemoveAll() {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
    jsonObj.done = []
    jsonObj.list = []
    localStorage.clear()
}

// Allow user to change 
var moving;
let doneTemp
let movingIndex, eIndex, eHTML;
ul.addEventListener('dragstart', (e)=>{
    moving = e.target
})
ul.addEventListener('dragleave', (e)=>{
    if(!(moving == e.target)){
        if(e.target.className == 'mylist collection-item' || e.target.className == 'mylist collection-item active'){
            e.preventDefault()
            
            movingIndex = jsonObj.list.indexOf(moving.innerHTML)
            eIndex = jsonObj.list.indexOf(e.target.innerHTML)
            
            ul.removeChild(moving)
            ul.insertBefore(moving, e.target)
                
            doneTemp = jsonObj.done[jsonObj.list.indexOf(e.target.innerHTML)] 
            eHTML = e.target.innerHTML
            jsonObj.done.splice(eIndex, 1)
            jsonObj.list.splice(eIndex, 1)
            
            jsonObj.list.splice(movingIndex, 0, eHTML);
            jsonObj.done.splice(movingIndex, 0, doneTemp);
            
            localStorage.setItem('todo', JSON.stringify(jsonObj))
        }
    }
})

// Take input afetr input is submited to storage
let newTask = document.getElementById('newTask')
document.getElementById('addbtn').addEventListener('click', (e) => {
    e.preventDefault()
    li = document.createElement('a')
    li.setAttribute('class', 'mylist collection-item')
    text = document.createTextNode(newTask.value)
    li.appendChild(text)
    li.setAttribute("draggable","true")
    ul.appendChild(li)
    jsonObj.list.unshift(newTask.value)
    jsonObj.done.unshift(0)
    console.log(jsonObj)
    localStorage.setItem('todo', JSON.stringify(jsonObj))
    newTask.value = ''
})

// To Mark as done or not done
document.getElementById('list').addEventListener('dblclick', (e) => {
    if(e.target.className.indexOf('active') > -1){
        jsonObj.done[jsonObj.list.indexOf(e.target.innerHTML)] = 0
        localStorage.setItem('todo', JSON.stringify(jsonObj))
        e.target.className = 'mylist collection-item '
    } 
    else{
        jsonObj.done[jsonObj.list.indexOf(e.target.innerHTML)] = 1
        localStorage.setItem('todo', JSON.stringify(jsonObj))
        e.target.className = 'mylist collection-item active'
    }
} )


// For nav bar  
$(document).ready(function(){
    $('.sidenav').sidenav();
});

// For Popup    
$(document).ready(function(){
    $('.modal').modal();
}); 
