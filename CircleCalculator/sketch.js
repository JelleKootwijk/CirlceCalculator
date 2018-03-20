const button = document.getElementById('button');
const reset = document.getElementById('reset');
const input = document.getElementById('input');

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var y = canvas.height / 2;
var x = canvas.width / 2;

button.addEventListener('click', updateBtn);
reset.addEventListener('click', resetCanvas);

 
function resetCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    document.getElementById('straal').innerHTML = 0;
    document.getElementById('radius').innerHTML = 0;

    document.getElementById('oppervlakte').innerHTML = 0;
    document.getElementById('omtrek').innerHTML = 0;
}

function updateBtn(){
    ctx.beginPath();
    ctx.arc(x, y, input.value, 0, 2 * Math.PI);
    document.getElementById('radius').innerHTML = input.value;
    document.getElementById('straal').innerHTML = input.value/2;

    let omtrek = input.value * Math.PI;
    let straal = input.value / 2;
    let oppervlakte = straal * straal * Math.PI;

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = omtrek.toFixed(2);

    ctx.stroke();
}
