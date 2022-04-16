const container = document.querySelector('#container');

function addBoxes (x) {
    if (x > 100){
        alert("Going above 100 is bad, sorry!");
    } else if (x < 12){
        alert("Going below 12 is too low");
    }
    //two for loops
    //first one creates a row container
    //second one inside creates each line in the row
    for (let i = 0; i < x; i++){
      let row = document.createElement("div");
      row.className = 'row';
      for (let b = 0; b < x; b++){
          let rowData = document.createElement("div");
          row.appendChild(rowData);
      }
      container.appendChild(row);
    }
}