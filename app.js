//paquete importado
require('colors');
const Math = require('./modules/math.js')
console.clear();
//console.log(Math);

const main = async() => {
  let x=  (Math.getRandomInt(100))
  let y= (Math.getRandomInt(50))
  console.log('****************************************'.bgYellow);
    console.log('****'.blue,'FUNCIONES MATEMATICAS'.bgMagenta.white,
                '*************'.blue);
    console.log('****************************************\n'.yellow);
  console.log("NUMEROS GENERADOS =>"+" "+x+","+ y);
     console.log('****************************************'.white.bgBlue);
     console.log("//".white.bgBlue +"     SUMA =" + Math.add(x,y))
     console.log("//".white.bgBlue +"    RESTA =" + Math.substract(x,y)) 
     console.log("//".white.bgBlue +"    MULTIPLICACION =" + Math.multiply(x,y))
     console.log("//".white.bgBlue +"    DIVISION =" + Math.divide(x,y))
     console.log('****************************************'.white.bgBlue);
     



}
  
main();