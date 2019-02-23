/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  debugger;
  if (preferences.length == 0) {
    return 0;
  }

  let arrayWithPairs = [];
  let clearPairs = [];

  preferences.forEach((element, index) => {
    arrayWithPairs[index] = `${(index + 1).toString()}.${element.toString()}`;
  });
  
  let abort = false;
  arrayWithPairs.forEach(element => {
    abort = false;
    const left = element.split('.')[0];
    const right = element.split('.')[1];

    let two = "";
    let three = "";

    for (let i = 0; i < arrayWithPairs.length && !abort; i++) {
      const elem = arrayWithPairs[i];
      const lef = elem.split('.')[0];
      const rig = elem.split('.')[1];

      if (lef == right && left != right && lef != rig) {
        two = elem;

        for (let j = 0; j < arrayWithPairs.length && !abort; j++) {
          const el = arrayWithPairs[j];
          const l = el.split('.')[0];
          const r = el.split('.')[1];
          const twor = two.split('.')[1];
    
          if (r == left && twor == l && l != r) {
            three = el;

            if (!clearPairs.length) {
              if (clearPairs.indexOf(`${element};${elem};${el}`) == -1 && clearPairs.indexOf(`${element};${elem}`) == -1 && clearPairs.indexOf(`${elem};${el}`) == -1) {
                clearPairs.push(`${element.split('.')[0]};${elem.split('.')[0]};${el.split('.')[0]};${el.split('.')[1]}`);
                abort = true;
              }    
            } else {

              for (let k = 0; k < clearPairs.length && !abort; k++) {
                const e = clearPairs[k];
                
                if (e.indexOf(`${element.split('.')[0]};${elem.split('.')[0]};${el.split('.')[0]}`) == -1 
                && e.indexOf(`${elem.split('.')[0]};${el.split('.')[0]};${element.split('.')[0]}`) == -1 
                && e.indexOf(`${el.split('.')[0]};${element.split('.')[0]};${elem.split('.')[0]}`) == -1) {
                  continue;
                } else {
                  abort = true;
                }                           
              }    
              
              if (!abort) {
                clearPairs.push(`${element.split('.')[0]};${elem.split('.')[0]};${el.split('.')[0]};${el.split('.')[1]}`);
                abort = true;
              }   
            }                    
          }          
        }
      }      
    }
  });
  debugger;
  return clearPairs.length;
};
