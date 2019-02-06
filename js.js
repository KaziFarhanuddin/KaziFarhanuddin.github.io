let ul = document.getElementById('toDo')
let li
let textA
let text = document.getElementById('input');

let data = localStorage.getItem('todo')
var jsonObj

if(!data){
    jsonObj = {
        list:[]
    }
}
else{
    jsonObj = JSON.parse(data)
    list = jsonObj.list
    list.forEach(element => {
        li = document.createElement('li')
        textA = document.createTextNode(element)
        li.appendChild(textA)
        ul.appendChild(li)            
    });
}
document.getElementById('adder').addEventListener('click', () => {
    jsonObj.list.unshift(text.value)
    li = document.createElement('li')
    textA = document.createTextNode(text.value)
    li.appendChild(textA)
    ul.insertBefore(li, ul.firstChild)
    console.log(jsonObj.list)
    localStorage.setItem('todo', JSON.stringify(jsonObj))
    text.value = ""
})

function Clear(){
    localStorage.clear()

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
}

var index;

document.getElementById('toDo').addEventListener('dblclick', (e)=> {
        index = jsonObj.list.indexOf(e.target.innerHTML)
        document.getElementById('toDo').removeChild(e.target)
        jsonObj.list.splice(index, 1)
        localStorage.setItem('todo', JSON.stringify(jsonObj))
    }   
)
