class Calculate{
    draw(input){
        canvas.beginPath();
        canvas.arc(x, y, input, 0, 2 * Math.PI);
    }

    calculateStraal(input){
        let straal  = input / 2;
        return straal;
    }

    calculateOppervlakte(input){
        let straal = input / 2;
        let oppervlakte = straal * straal * Math.PI;
        return oppervlakte;
    }
    
    calculateOmtrek(input){
        let omtrek = input * Math.PI;
        return omtrek;
    }

    // terug rekenen
    calculateOmtrekBack(input){
        let diameter = input / Math.PI;
        return diameter;
    }

    calculateOppervlakteBack(input){
        let straal = Math.sqrt(input / Math.PI);
        let diameter = straal * 2;
        return diameter;
    }
}