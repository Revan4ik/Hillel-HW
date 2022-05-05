//Task 1
var arr = [{name: 'Vasya', age: 24}, 
{name: 'Petya', age: 12}, 
{name: 'Fedya', age: 6}, 
{name: 'Ann', age: 18}, 
{name: 'Nastya', age: 40} ]
arr.sort(function (a,b){
if (a.age > b.age) {
        return 1
}
if (a.age < b.age){
    return -1;
}
return 0;
})
console.log('arr =>' , arr)


//Task 2
var arrNum = [NaN, 0, 77, false, -17, '', undefined, 99, null];
arrNum = arrNum.filter(function(filterfalse){
    return Number(filterfalse)
})
console.log('arr Num =>',arrNum)


//Task 3
var task3arr = [34, 4, 43, 4, 'string', null,4, 23, 44, 4, NaN, 4, undefined]
function find(task3arr, value){
    var arrindex = [];
    for (var i = 0; i < task3arr.length; i++){
        if (task3arr[i] === value){
            arrindex.push(i);
        }
    }
    return arrindex
}
console.log('arrindex =>', find(task3arr, 4));


//Task 4
function createMatrix(row, col){
    var resultMatrix = [];
    for (var i = 0; i < row; i++){
        resultMatrix[i] = [];
        for (var j = 0; j < col; j++){
            var random = Math.ceil(Math.random() * 100);
            resultMatrix[i].push(random);
        }
    }
    return resultMatrix;
}
console.log('Result Matrix =>', createMatrix(10, 15));

//bonus task
var bonustaskarr = [1, [2], [3, [4, ['57', false], [undefined,[NaN, null]]]]]
 function flatten(bonustaskarr){
     var resultflatten = [];
     for (var i = 0; i < bonustaskarr.length; i++){
         var elem = bonustaskarr[i];
         if (Array.isArray(elem)){
             resultflatten = resultflatten.concat(flatten(elem));
         } else {
            resultflatten.push(elem);
         }
     }
     return resultflatten;
 }
 console.log('bonustaskarr =>', flatten(bonustaskarr));
