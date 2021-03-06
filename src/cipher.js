window.cipher = {
  encode: (string,offset) => {
    let output = "";
    const clave = parseInt(offset);
    for (let i=0; i<string.length; i++){
      if ( string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let formula = (string.charCodeAt(i) - 65 + clave) % 26 + 65;
        output += String.fromCharCode(formula);
      }
    } 
    return output;
  },

  decode: (string,offset) => {
    let output = "";
    const clave = parseInt(offset);
    for( let i=0;i<string.length;i++){
      if ( string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let formula = (string.charCodeAt(i) - 90 - clave) % 26 + 90;
        output += String.fromCharCode(formula);
      }
    } 
    return output;
  }
};
