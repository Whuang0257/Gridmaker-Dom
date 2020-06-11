let grid = document.getElementById("grid");
let gridBody = grid.firstElementChild; 
let rows = 0;
let cols = 0;

function addRow(){
    if (rows === 0) {
        let row = document.createElement("tr"); //creating a blank row
        let col = document.createElement("td"); //creating a col to add to blank row
        row.appendChild(col); //adding a col to row which is then added to the grid
        grid.appendChild(row);
        rows++;
        cols++;
    } else {
        let row = document.createElement("tr"); //creating a blank row
        for (let i = 0; i < cols; i++) {
            let col = document.createElement("td"); //if col is > 0, new row will be added with col #
            row.appendChild(col); 
        }
        rows++;
        grid.appendChild(row);
    }
}

function addCol(){
    if (rows === 0) {
        let row = document.createElement("tr"); //creating a blank row
        let col = document.createElement("td"); //creating a col to add to blank row
        row.appendChild(col); //adding a col to row which is then added to the grid
        grid.appendChild(row);
        rows++;
        cols++;
    } else {
        let allRows = document.getElementsByTagName("tr"); //gets collection of all elements with tag name
        for(let i = 0; i < rows; i++){
            let col = document.createElement("td"); //creating a col
            allRows[i].appendChild(col);    //adding col to the existing row
        }
        cols++;
    }
}

function removeRow(){
    if (rows !== 0) {
        let row = grid.lastElementChild //returns last child of the element
        grid.removeChild(row); //remove the last child
        rows--;

        if (rows === 0) {
            cols = 0; //in case of 1x1 grid
        }
    }
}

function removeCol(){
    if (rows !== 0) {
        let allRows = document.getElementsByTagName("tr");
        for(let i = 0; i < rows; i++){
            let col = allRows[i].lastElementChild;
            allRows[i].removeChild(col);
        }
        cols--;

        if(cols === 0) {
            while(grid.firstChild){
                grid.removeChild(grid.firstChild);
            }
            rows = 0;
        }
    }
}

function fillUncolored(){
    let color = document.getElementById("selectedID").value;
    
    if(color !== "SELECT"){
       let allCells = document.getElementsByTagName("td");
        for(let i = 0; i < allCells.length; i++){
            // console.log(allCells[i].style.backgroundColor);
            if(allCells[i].style.backgroundColor === ""){
                allCells[i].style.backgroundColor = color.toLowerCase();
            }
        }
    }
}

function fillAll(){
    let color = document.getElementById("selectedID").value;
    
    if(color !== "SELECT"){
       let allCells = document.getElementsByTagName("td");
        for(let i = 0; i < allCells.length; i++){
            allCells[i].style.backgroundColor = color.toLowerCase();
        }
    }
}

function clearAll(){
    let allCells = document.getElementsByTagName("td");
    for(let i = 0; i < allCells.length; i++){
        allCells[i].style.backgroundColor = "";
    }
}