let grid = document.getElementById("grid");
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
        let row = document.createElement("tr");
        for (let i = 0; i < cols; i++) {
            let col = document.createElement("td");
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
        grid.appendChild(col);
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
        row--;

        if (row === 0) {
            cols = 0; //in case of 1x1 grid
        }
    }
}