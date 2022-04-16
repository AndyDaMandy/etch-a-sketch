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
      row.classList.add('row');  
      /*
      document.querySelector('row').setAttribute(
          'style',
          'height: 20px; width: 2000px, float: left',
      )
      */
      for (let b = 0; b < x; b++){
          let block = document.createElement("div");
            block.classList.add('block');
            function flipper (x){   
                x.classList.add('flipped');
                 x.classList.remove('block');
             }
            block.onmouseover = function(){flipper(block);};
          /*
          rowData.setAttribute(
              'style',
              'background-color: black; height: 20px; width: 20px; float: left',
          )
          */
          row.appendChild(block);
      }
      container.appendChild(row);
    }
}