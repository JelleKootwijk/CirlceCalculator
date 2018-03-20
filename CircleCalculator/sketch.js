const button = document.getElementById('button');
const reset = document.getElementById('reset');
const input = document.getElementById('input');

const omtrekButton = document.getElementById('calculateOmtrek');
const calculateOmtrek = document.getElementById('inputOmtrek');

const oppervlakteInput = document.getElementById('inputOppervlakte');
const calculateOppervlakte = document.getElementById('calculateOppervlakte');

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var y = canvas.height / 2;
var x = canvas.width / 2;

button.addEventListener('click', updateBtn);
reset.addEventListener('click', resetCanvas);
omtrekButton.addEventListener('click', calculateOmtrekBoi);
calculateOppervlakte.addEventListener('click', calculateOppervlakteDibng);
 
function resetCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    document.getElementById('straal').innerHTML = 0;
    document.getElementById('radius').innerHTML = 0;

    document.getElementById('oppervlakte').innerHTML = 0;
    document.getElementById('omtrek').innerHTML = 0;
}

function calculateOppervlakteDibng(){
    let straal = Math.sqrt(oppervlakteInput.value / Math.PI);
    let diameter = straal * 2;
    let omtrek = diameter * Math.PI;
    let oppervlakte = straal * straal * Math.PI;

    ctx.beginPath();
    ctx.arc(x, y, diameter, 0, 2 * Math.PI);

    document.getElementById('radius').innerHTML = diameter.toFixed(2);
    document.getElementById('straal').innerHTML = straal.toFixed(2);

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = omtrek.toFixed(2);
    ctx.stroke();
}

function calculateOmtrekBoi(){
    let diameter = calculateOmtrek.value / Math.PI;
    let straal = diameter / 2;
    let omtrek = calculateOmtrek.value;
    let oppervlakte = straal * straal * Math.PI;

    ctx.beginPath();
    ctx.arc(x, y, diameter, 0, 2 * Math.PI);

    document.getElementById('radius').innerHTML = diameter.toFixed(2);
    document.getElementById('straal').innerHTML = straal.toFixed(2);

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = omtrek;
    ctx.stroke();
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
