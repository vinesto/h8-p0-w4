function changeMe(arr) {
  // you can only write your code here!
  // console.log(arr.length);
var arrTemp=[];
for(var i=0;i<arr.length; i++){
  var obj1={
      firstName:arr[i][0],
      lastName:arr[i][1],
      gender:arr[i][2],
      age:arr[i][3],
    }
    arrTemp.push(obj1);
  }
for(var j=0; j<arrTemp.length; j++){
  var fullName=j+1+". "+arr[j][0]+" "+arr[j][1]+":";
  console.log(fullName);
  console.log(arrTemp[j]);
  }
  // console.log(fullName);
  // console.log(arrTemp);
}
// TEST CASES
// changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""
