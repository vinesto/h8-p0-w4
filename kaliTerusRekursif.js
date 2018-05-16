function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var temp = 1;
  var strAngka = String(angka);
  if(angka<10){
    return angka;
  }else{
    for(var i = 0; i < strAngka.length; i++){
    temp *= Number(strAngka[i]);
    }
  }
  return kaliTerusRekursif(temp);
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
