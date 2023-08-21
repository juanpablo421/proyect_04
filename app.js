//paquete importado
require('colors');
const Math = require('./modules/math.js')
console.clear();
//console.log(Math);

const main = async() => {
  let x=  (Math.getRandomInt(1000))
  let y= (Math.getRandomInt(5000))
  console.log('****************************************'.bgBlack);
    console.log('****'.bgRed,'FUNCIONES MATEMATICAS'.bgMagenta.white,
                '*************'.bgRed);
    console.log('****************************************\n'.bgBlack);
  console.log("NUMEROS GENERADOS =>"+" "+x+","+ y);
     console.log('****************************************'.bgRed);
     console.log("//".bgRed +"     SUMA =" + Math.add(x,y))
     console.log("//".bgRed +"    RESTA =" + Math.substract(x,y)) 
     console.log("//".bgRed +"    MULTIPLICACION =" + Math.multiply(x,y))
     console.log("//".bgRed +"    DIVISION =" + Math.divide(x,y))
     console.log('****************************************'.bgRed);
     



}
  
main();