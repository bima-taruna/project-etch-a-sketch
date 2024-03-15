const gridContainer = document.querySelector(".grid-container");

function addGrid(size, color) {
    gridContainer.replaceChildren()
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

addGrid(16, "black");