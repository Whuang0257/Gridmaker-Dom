let grid = document.getElementById("grid");
let rows = 0;
let cols = 0;

function addRow(){
    if (rows === 0) {
        let row = document.createElement("tr"); //creating a blank row
        let col = document.createElement("td"); //creating a col to add to blank row
        col.appendChild(row); //adding a col to row which is then added to the grid
        grid.appendChild(col);
        rows++;
        cols++;
    } else {
        let col = document.createElement("td");
        let row = document.createElement("tr");
        for (let i = 0; i < cols; i++) {
            col.appendChild(row);
            rows++;
        }
        grid.appendChild(col);
    }
}

function addCol(){

}
