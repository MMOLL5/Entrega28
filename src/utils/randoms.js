const between = (pmin, pmax) => {
  return Math.floor(Math.random() * (pmax + 1 - pmin) + pmin);
};

export const calculo = () => {
  const cant = 100000000;
  let obj = [];
    let sum = 0;
    let bandera=false;
    for (let i = 0; i < cant; i++) {
      let num = between(1, 1000);
      for (const [key, value] of Object.entries(obj)) {
          if (key == num){
            value =+ 1;
            bandera = true;
          }
      }
      if (!bandera){
        
      }

    }
    return sum;

  };
  
  process.on('message', (msg) => {
    if (msg == 'start') {
      console.log('Start randoms');
      const sum = calculo();
  
      if (process && process.send) {
        process.send(sum);
      }
    }
  });