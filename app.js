const boxes = document.querySelectorAll('.item')
let selectedItems = []
let selectedContainer = document.querySelector('.selected-items section')

function removeSelected (value) {
    let allSelected = document.querySelectorAll('.selected-items section span')

    allSelected.forEach(item => {
        if (item.innerHTML.includes(value)) {
            item.remove()
        }
    })

    selectedItems = selectedItems.filter(item => !item.includes(value))
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('selected')
        if (box.classList.contains('selected')) {
            selectedItems.push(`<span>Item ${box.innerHTML}</span>`)
            selectedContainer.innerHTML = selectedItems.join('')
        } else {
            removeSelected(box.innerHTML)
        }
    })
})