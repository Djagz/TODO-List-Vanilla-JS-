var form = document.getElementById('main-form'),
    input = document.getElementById('form-input'),
    ol = document.getElementById('list'),
    submitBtn = document.getElementById('submit'),
    searchInput = document.getElementById('search-input')


form.addEventListener('submit', addListItem)
searchInput.addEventListener('input', filterList)

function clearForm(){
    input.value = ""
}


function addListItem(e){
    e.preventDefault()
    var li = document.createElement('li'),
    deleteBtn = document.createElement('button')
    
    li.className = "list-group-item"
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.addEventListener('click', delteItem)

    var value = input.value
    console.log('value:', value)
    li.setAttribute('id', value)
    deleteBtn.setAttribute('id', value)
    li.appendChild(document.createTextNode(value))
    li.appendChild(deleteBtn)
    console.log('li: ', li)
    // li.appendChild(document.createTextNode(JSON.stringify(deleteBtn)))
    ol.appendChild(li)
    clearForm()
}

function filterList(e){
    console.log('value: ', e.target.value)
    var list = document.getElementsByClassName('list-group-item'),
        searchValue = e.target.value.toUpperCase(),
        idx = 0,
        listValue = ''

    for(var i=0; i<list.length; i++){
        console.log('elements: ', list[i])
        console.log('innerHTML:', list[i].innerHTML, 'type: ', typeof list[i].innerHTML[0])
        console.log('searchItem:', searchValue, 'type: ', typeof searchValue)
        idx = list[i].innerHTML.indexOf('<')
        listValue = list[i].innerHTML.substring(0, idx)

        if(listValue.toUpperCase().includes(searchValue)){
            console.log('in if', searchValue)
            list[i].style.display = ''
        } else {
            list[i].style.display = 'none'
        }
    }
}

function delteItem(e){
    var list = document.getElementsByClassName('list-group-item')
    for(var i=0; i<list.length; i++){
        if(list[i].id === e.target.id){
            list[i].remove()
        }
    }
}