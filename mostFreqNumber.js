function sorting(arrNumber) {
  // code di sini
  var tukar = false;
  while(!tukar){
    tukar = true;
    for(var i = 1; i <= arrNumber.length; i++){
      if(arrNumber[i-1]<arrNumber[i]){
        tukar = false;
        var temp = arrNumber[i-1];
        arrNumber[i-1] = arrNumber[i];
        arrNumber[i] = temp;
      }
    }
  }
return arrNumber
}
console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))

function getTotal(arrNumber) {
  // code di sini
  var count = 0
  for(var i = 0; i < arrNumber.length; i++){
    if(arrNumber[i] === arrNumber[0]){
      var high = arrNumber[0];
      count++
    }
  }
  // console.log(count);
  // console.log(high);

  return "angka paling besar adalah "+high+" dan jumlah kemunculan sebanyak "+count+" kali"
}



function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  if(arrNumber.length === 0){
    return '';
  }
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
//
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
//
// console.log(mostFrequentLargestNumbers([]));
//''
