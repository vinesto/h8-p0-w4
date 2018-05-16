function graduates (students) {
  // Code disini
  var resObj = {};
  for(var i = 0; i < students.length; i++){
    var tempObj = {};
    // console.log(students[i].score)
    if(resObj[students[i].class] === undefined){
      resObj[students[i].class] = [];
    }
    if(students[i].score >= 75){
      tempObj.name = students[i].name
      tempObj.score = students[i].score
      //arrRes.push();
      // resObj[students[i].class] = []
      resObj[students[i].class].push(tempObj);
      // console.log(tempObj);
    }
  }
  // console.log(tempObj)
  // console.log(arrRes)
  console.log(resObj)
}

// console.log(graduates([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


// console.log(graduates([])); //{}
