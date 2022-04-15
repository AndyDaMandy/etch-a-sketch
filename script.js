const container = document.querySelector('#container');

function addBoxes (x) {
    if (x > 100){
        alert("Going above 100 is bad, sorry!");
    } else if (x < 12){
        alert("Going below 12 is too low");
    }
    for (let i = 0; i < x; i++){
      let b = document.createElement("div");
    }
}