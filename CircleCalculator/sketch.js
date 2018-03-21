const diameterButton = document.getElementById('calculateDiameter');
const omtrekButton = document.getElementById('calculateOmtrek');
const oppervlakteButton = document.getElementById('calculateOppervlakte');
const resetCanvasButton = document.getElementById('resetCanvas');

const inputDiameter = document.getElementById('inputDiameter');
const inputOmtrek = document.getElementById('inputOmtrek');
const inputOppervlakte = document.getElementById('inputOppervlakte');



const diameterText = document.getElementById('radius').innerHTML;
const straalText = document.getElementById('straal').innerHTML; 
const oppervlakteText = document.getElementById('oppervlakte').innerHTML;
const omtrekText = document.getElementById('omtrek').innerHTML;


const getCanvas = document.getElementById('canvas');
const canvas = getCanvas.getContext('2d');

const y = getCanvas.height / 2;
const x = getCanvas.width / 2;

diameterButton.addEventListener('click', calculateDiameter);
omtrekButton.addEventListener('click', calculateOmtrek);
oppervlakteButton.addEventListener('click', calculateOppervlakte);
resetCanvasButton.addEventListener('click', resetCanvas);

var calculate = new Calculate();


function resetCanvas(){
    canvas.clearRect(0, 0, getCanvas.width, getCanvas.height);

    document.getElementById('straal').innerHTML = 0;
    document.getElementById('radius').innerHTML = 0;

    document.getElementById('oppervlakte').innerHTML = 0;
    document.getElementById('omtrek').innerHTML = 0;
}

function calculateOppervlakte(){
    let diameter = calculate.calculateOppervlakteBack(inputOppervlakte.value);
    let straal = calculate.calculateStraal(diameter);
    let oppervlakte = calculate.calculateOppervlakte(diameter);
    let omtrek = calculate.calculateOmtrek(diameter);

    calculate.draw(diameter);

    document.getElementById('radius').innerHTML = diameter.toFixed(2);
    document.getElementById('straal').innerHTML = straal.toFixed(2); 

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = omtrek.toFixed(2);
  
    canvas.stroke();
}

function calculateOmtrek(){
    let diameter = calculate.calculateOmtrekBack(inputOmtrek.value);
    let straal = calculate.calculateStraal(diameter);
    let oppervlakte = calculate.calculateOppervlakte(diameter);

    calculate.draw(diameter);

    document.getElementById('radius').innerHTML = diameter.toFixed(2);
    document.getElementById('straal').innerHTML = straal.toFixed(2); 

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = inputOmtrek.value;

    canvas.stroke();
}

function calculateDiameter(){
    let straal = calculate.calculateStraal(inputDiameter.value);
    let oppervlakte = calculate.calculateOppervlakte(inputDiameter.value);
    let omtrek = calculate.calculateOmtrek(inputDiameter.value);

    calculate.draw(inputDiameter.value);

    document.getElementById('radius').innerHTML = inputDiameter.value;
    document.getElementById('straal').innerHTML = straal.toFixed(2); 

    document.getElementById('oppervlakte').innerHTML = oppervlakte.toFixed(2);
    document.getElementById('omtrek').innerHTML = omtrek.toFixed(2);

    canvas.stroke();
}