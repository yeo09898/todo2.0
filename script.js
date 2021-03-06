function showNewEventModal() {
    $('#newevent').modal('show')
}

var list = document.getElementById('list');

//add.addEventListener('click', addItem);

function addItem() {
    let unit = document.createElement('div')
    let input = document.getElementById('input')

    if (input.value == '') {
        let warn = document.createElement('p')
        warn.appendChild(document.createTextNode('Please Enter Something!'))
        warn.setAttribute("style", "margin-bottom:1px;margin-top:1px;")
        let controls = document.querySelector('.controls')
        controls.appendChild(warn)
        controls.insertBefore(warn, controls.childNodes[4])
        setTimeout(() => {
            controls.removeChild(warn)
        }, 3000);
    } else {
        let row = document.createElement('div')
        row.className = "row"
        let col = document.createElement('div')
        col.className = "col-md-12"
        let h = document.createElement('h1')
        h.appendChild(document.createTextNode(input.value))
        col.appendChild(h)
        let button = document.createElement('button')
        button.className = "btn btn-success"
        button.setAttribute("style", "float:right;margin-right: 10px;")
        button.setAttribute("onclick", "removeItem(0)")
        button.appendChild(document.createTextNode("Done"))
        col.appendChild(button)
        row.appendChild(col)
        unit.appendChild(row)
        unit.appendChild(document.createElement('hr'))
        list.insertBefore(unit, list.children[0])
        rearrange(1);
        setTimeout(() => {
            unit.className = 'visual'
        }, 2);
        input.value = ''
    }
}

function removeItem(i) {
    list.removeChild(list.children[i])
    rearrange(i);
}

function rearrange(i) {
    for (; i < list.children.length; i++) {
        list.children[i].children[0].children[0].children[1].setAttribute("onclick", `removeItem(${i})`)
    }
}