function totalDigitRekursif(angka) {
  // you can only write your code here!
  //Cara 1
  var temp=0;
  if(angka<10){
    return angka
  } else {
    parseInt(temp=angka%10)
    return temp+totalDigitRekursif(parseInt(angka/10));
  }

  // Cara 2
  // var angkaStr = '' + angka
  // var angkaDepan = Number(angkaStr[0])
  // var belakang = Number(angkaStr.slice(1))
  //
  // if (angkaStr.length === 1) {
  //   return Number(angkaStr)
  // } else {
  //   return angkaDepan + totalDigitRekursif(belakang)
  // }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
