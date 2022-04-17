const container = document.querySelector('#container');

function addBoxes (x) {
    container.innerHTML = '';
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
            block.onmouseover = function(){flipper(block); let randomColor = Math.floor(Math.random()*16777215).toString(16); block.style.backgroundColor = '#' + randomColor};
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

function prompter(){
  let number =  prompt('What size grid would you like? Please select a number between 12 and 100')
    if (number > 100){
        alert("Going above 100 is bad, sorry!");
    } else if (number < 12){
        alert("Going below 12 is too low");
    } else {
        addBoxes(number)
    }
}