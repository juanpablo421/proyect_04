const Maths = {}
    function getRandomInt(max) {
        return Math.floor(Math.random() *max);
    }
    function add(a,b) {
        return a + b;
    }

    function substract(a,b){
        return a - b;
    }
     function multiply(a,b){
        return a * b;
     }
        // define la funcion dividir(divide)
     function divide(a,b){
        if ((b ==0 && a==0)||(b==0)){
            return `ERROR0:N/A :: VALORES a= ${a} y b =${b}`.red.bgYellow
            }else if (a== 0) {
                return `ERROR0:N/A :: VALORES a= ${a} y b =${b}`.red.bgYellow
            }else{
                return a / b;

                }
            }
            Maths.add = add;
            Maths.substract = substract;
            Maths.multiply = multiply;
            Maths.divide = divide;
            Maths.getRandomInt = getRandomInt

            module.exports = Maths;
