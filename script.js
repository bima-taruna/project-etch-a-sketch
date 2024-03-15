const gridContainer = document.querySelector(".grid-container");
let color = "black"
let size = 16
let randomMode = false
const colors = document.querySelectorAll(".red,.green,.blue,.black")
const randomColor = document.querySelector(".random")
const sizeButton = document.querySelector(".change-size")

sizeButton.addEventListener('click', () => {
    let newSize = prompt("input the grid size")
    if (newSize === null || !Number.isInteger(parseInt(newSize))) {
        alert("input is not valid")
    } else if (newSize > 100) {
        alert("the maximum size is 100")
    } else if (newSize < 16) {
        alert("the minimum size is 16")
    } else {
        size = newSize
        addGrid(size, color, randomMode)
    }
})

colors.forEach((item) => {
    item.addEventListener("click", () => {
        color = item.className
        randomMode = false
        addGrid(size, color, randomMode)
    })
})

randomColor.addEventListener("click", () => {
    randomMode = true
    addGrid(size, color, randomMode)
})

function addGrid(size, color, randomMode) {
    console.log(randomMode)
    gridContainer.replaceChild
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div")
        column.setAttribute("class", "column");
        column.style.display = "flex"
        column.style.flexDirection = "column"
        column.style.flexWrap = "wrap"
        gridContainer.appendChild(column)
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div")
            grid.setAttribute("class", "cell")
            grid.style.width = adjustGridSize(size)
            grid.style.height = adjustGridSize(size)
            grid.style.border = "1px solid black"
            grid.addEventListener("mouseover", () => {
                if (randomMode) {
                    color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
                    grid.style.backgroundColor = color
                }
                grid.style.backgroundColor = color
            })
            column.appendChild(grid)
        }
    }
}

function adjustGridSize(size) {
    let result = 0
    result = Math.floor(500 / size) - 2
    return result + "px"
}

addGrid(size, color, randomMode);