//Task 1

function Numbers(a,b){
while(true){
    a = +prompt('введите первое число');
    if (isNaN(a)) {
        alert ('первый ввод - не число');
        return;
}
    b = +prompt('введите второе число')
    if (isNaN(b)){
    alert ('второй ввод - не число')
    return
}
compare(a,b)
}
}
function compare(a,b){
    if (a < b){
        alert('первое число меньше')
    } else if ( a > b){
        alert('второе число меньше')
    } else {
        alert("числа равны")
    }
}
Numbers();

// Task 2

// function yourentrance() {
//     function isCheck(min, max, value) {
//       return (
//         min && max && value && value >= min && value <= max
//       );
//     }
  
//     while (true) {
//       floor = +prompt("Введите колличество этажей (1 - 25)");
//       if (isCheck(1, 25, floor)) break;
//       alert("Введите правильное значение");
//     }
  
//     while (true) {
//       entrance = +prompt("Введите колличество подъездов (1 - 10)");
//       if (isCheck(1, 10, entrance)) break;
//       alert("Введите правильное значение");
//     }
  
//     while (true) {
//       flat = +prompt(
//         "Введите колличество квартир на лестничной площадке (01 - 20)"
//       );
//       if (isCheck(1, 20, flat)) break;
//       alert("Введите правильное значение");
//     }
  
//     var flatCount = floor * entrance * flat;
  
//     while (true) {
//       var flatNumber = +prompt("Введите номер квартиры");
//       if (flatNumber > flatCount || !flatNumber)
//         alert("Вы ввели не допустимое значение");
//       break;
//     }
  
//     for (i = 1; i <= entrance; i++) {
//       if (flatNumber <= floor * flat * i) {
//         alert("Ваша квартира находится в подъезде " + i);
//         break;
//       }
//     }
//   }
//   yourentrance();



//Task 3

// function isEven (Number){
// return (Number % 2 === 0)
// };
// function result (num1, num2){
// var num1 = +prompt('введите первое число')
// var num2 = +prompt('введите второе число')
// if (isEven(num1) && !isEven(num2)) {
// return alert('Одно нечётное число ' + num2)
// } else if (!isEven(num1) && isEven(num2))
// return alert('Одно нечётное число ' + num1);

// if (isEven(num1) && isEven(num2)) {
// return alert('Оба числа чётные, произведение = ' + (num1 * num2));
// }
// return alert('Оба числа нечётные, сумма = ' + (num1 + num2));
// };
// result()



//Task 4

// function check (x1,x2,x3,x4,y1,y2,y3,y4){
//     var x1 = +prompt('введите х1')
//     var x2 = +prompt('введите х2')
//     var x3 = +prompt('введите х3')
//     var x4 = +prompt('введите х4')

//     var y1 = +prompt('введите y1')
//     var y2 = +prompt('введите y2')
//     var y3 = +prompt('введите y3')
//     var y4 = +prompt('введите y4')

//     function isRectangle(x1, x2, x3, x4, y1, y2, y3, y4) {
//         return x1 === x4 && y1 === y2 && x2 === x3 && y3 === y4;
//       }
    
//       isRectangle(x1, x2, x3, x4, y1, y2, y3, y4)
//         ? alert("Фигура - прямоугольник")
//         : alert("Не прямоугольник");
// }
// check();



// Task 5

// function Getsequence(start, step){
//     start = start || 0;
//     step = step || 1;
//     return function creategenerator(){
//       return (start = start + step);
//     }
//   }

//   function call() {
//     var generator = Getsequence(10,3);

//     alert(generator()); // 13
//     alert(generator()); // 16
//     alert(generator()); // 19
//   }
//   call()
