const btn = document.querySelector('button')
let size;
let num = 0;

btn.addEventListener('click', () => {
    size = prompt("How many squares do you want per side? " , "10");
    if (size > 25){size = 25}
    if (num >= 1){const dis = document.querySelectorAll(".grid"); dis.forEach(d => d.outerHTML = "")}
    createGrid();
    num++;
})

const mainContainer = document.querySelector(".mainContainer");

function createGrid(){
    const width = 230/size;
    for(x=0; x<(size ** 2);x++){
        const grid = document.createElement('div');
        grid.className = "grid";
        grid.style.backgroundColor = "black"
        grid.style.width =  `${width}px`;
        grid.style.height =  `${width}px`;
        mainContainer.append(grid);
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach(x => x.addEventListener("mouseover", () => {
        x.classList.toggle("over");
    }))
}

