// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  const mystring = 'the-bridge';
  const mynewstring = string.charAt(4);
  return mynewstring;
  

}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  const mystring = "the-bridge-is-here"
  const newSub = string.substring(0, 10);
  return newSub;

}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  const mystring = "the-bridge-is-here";
  const newsubstr = string.substr (4,6);
  return newsubstr;
}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  const mystring = 'the-bridge';
  const newupper = string.toUpperCase ();
  return newupper;

}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  const mystring = 'THE-BRIDGE';
  const newlower = string.toLowerCase();
  return newlower;
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  const mystring = '  the-bridge  ';
  const nospace= string.trim();
  return nospace;

}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getSplit(string) {
  const newfrase = "the-bridge-is-here"
  const wordsplit = string.split(' ');
  return wordsplit;
  
}

// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman frase.
// =============================================================================
function getReplace(string) {
  const newreplace = "The Bridge is great"
  const wordreplace = string.replace ('great', 'amazing');
  return wordreplace;
}

// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'the'.
// =============================================================================
function getIndexOf(string) {
  const newIndexOF = " The bridge is here"
  const wordindexof = string.indexOf('The');
  return wordindexof;
}

// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  const newWith = "the bridge is here"
  const wordSW = string.startsWith('the');
  return wordSW;
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'the' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  const newEWith = "the bridge is here";
  const  wordEW = string.endsWith ('here');
  return wordEW;
}

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  const newincludes = "the bridge is here"
  const wordIncludes = string.includes('the');
  return wordIncludes;
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  const newconcat= 'the-bridgethe-bridge';
  const wordconcat = string1.concat(string2);
  return wordconcat;
}

// done.
// =============================================================================
