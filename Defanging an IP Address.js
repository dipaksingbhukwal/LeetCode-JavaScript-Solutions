/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  // address = address.split('');
  // for(let i = 0; i< address.length; i++){
  //     if(address[i]==='.')
  //         address[i] = '[.]';
  // }
  // return address.join('')
  return address.replace(/\./g, "[.]");
};

console.log(defangIPaddr("1.1.1.1")); // Expected output - "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // Expected output - "255[.]100[.]50[.]0"
