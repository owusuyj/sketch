const mainContainer = document.querySelector(".mainContainer");
for(x=0; x<100;x++){
    const grid = document.createElement('div');
    grid.className = "grid";
    grid.style.cssText = "background-color: black; width: 15px; height: 15px;"
    mainContainer.append(grid);
}

const grids = document.querySelectorAll(".grid");
grids.forEach(x => x.addEventListener("mouseover", () => {
    x.classList.toggle("over");
}))