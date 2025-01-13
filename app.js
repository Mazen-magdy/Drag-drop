// input 
let text = document.getElementById('text')
let btn = document.getElementsByTagName('button')[0]
let pContainer = document.getElementsByClassName('container')[0]
let P = Array.from(document.querySelectorAll('p'))
let drag;
btn.addEventListener('click', () => {
    let p = document.createElement('p')
    p.textContent = text.value 
    p.classList.add('element')
    p.draggable = true
    text.value = ''
    pContainer.appendChild(p)    
    let P = Array.from(document.querySelectorAll('p'))
    console.log(P)
    P.forEach((element) => {
        element.addEventListener('drag', () => {
            drag = element
            element.style.opacity = '0.5'
        })
        element.addEventListener('dragend', () => {
            element.style.opacity = '1'
        })
    })

})
let boxes = Array.from(document.getElementsByClassName('box'))
boxes.forEach(element => {
    element.addEventListener('dragover',(event) => {
        event.preventDefault()

        element.style.background = '#ccf'
    })
    element.addEventListener('dragleave',() => {
        element.style.background = '#cfc'
    })
    element.addEventListener('drop',(event) => {
        event.preventDefault()
        element.style.background = '#cfc'

        console.log(drag)
        drag.parentNode.removeChild(drag)
        element.appendChild(drag)
    })
    
})
