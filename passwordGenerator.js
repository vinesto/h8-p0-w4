function changeVocals (str) {
  //code di sini
  var vocal = "aiueoAIUEO";
  var nextStr = "bjvfpBJVFP";
  var result = "";
  for(var i = 0; i<str.length; i++){
    // console.log(str[i]);

    for(var j = 0; j<vocal.length; j++){// LOOP str vocal
      if(str[i] === vocal[j]){
        result += nextStr[j];
        break;
      }
    } if (result.length < i+1) {// LOOP str bukan vocal
      // console.log(str[i])
      result += str[i]
    }

  }
  // console.log(result)
  return result
}

// console.log(changeVocals("Dimitri Wahyudiputra"));

function reverseWord (str) {
  //code di sini
  var result='';
  for(i = 1 ; i<str.length+1; i++){
    result += str[str.length-i];
  }
  // console.log(result);
  return result;
}

// console.log(reverseWord("Djmjtrj Wbhyvdjpvtrb"))


function setLowerUpperCase (str) {
  //code di sini
  var result = '';
  for(var i = 0; i<str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      result += str[i].toLowerCase();
    } else
    if(str[i] === str[i].toLowerCase()){
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  // console.log(result);
  return result;
}

// console.log(setLowerUpperCase("brtvpjdvyhbW jrtjmjD"))


function removeSpaces (str) {
  //code di sini
  var result = "";
  for(var i=0; i<str.length; i++){
    if(str[i] === " "){
    continue;
    }result += str[i];
  }
  return result;
  console.log(result);
}

// console.log(removeSpaces("BRTVPJDVYHBw JRTJMJd"));

function passwordGenerator (name) {
  //code di sini
  var resVocals = changeVocals(name);
  var resReverse = reverseWord(resVocals);
  var resLowUpCase = setLowerUpperCase(resReverse);
  var resRemSpace = removeSpaces(resLowUpCase);
  if(name.length<5){
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  } return resRemSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
