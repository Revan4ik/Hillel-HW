// // //Task 1
// // function Numbers(a,b){
// // while(true){
// //     a = +prompt('введите первое число');
// //     if (!Number.isInteger(a)) {
// //         alert ('первый ввод - не число');
// //         return;
// // }
// //     b = +prompt('введите второе число')
// //     if (!Number.isInteger(b)){
// //     alert ('второй ввод - не число')
// //     return
// // }
// // compare(a,b)
// // }
// // }
// // function compare(a,b){
// //     if (a < b){
// //         alert('первое число меньше')
// //     } else if ( a > b){
// //         alert('второе число меньше')
// //     } else {
// //         alert("числа равны")
// //     }
// // }
// Numbers();




//Task 2
// var maxfloor = 25;
// var maxentrance = 10;
// var maxnumbofflat = 20;
// var yourentrance = ''
// var yourfloor = ''
// var floor = +prompt ('введите количество этажей')
// var entrance = +prompt ('введите количество подъездов')
// var numbofflat = +prompt ('введите количество квартир на площадке')
// var flat = +prompt ('введите номер квартиры')
// function isCheck1(min1, max1, floor){
//     return ((min1 && max1 && floor) && (min1 <= floor && max1 >= floor))
// }
// if(isCheck1(1, 25, floor)){
//     console.log('ok')
// } else {console.log('ne ok')}
// function isCheck2(min2, max2, entrance){
//     return ((min2 && max2 && entrance) && (min2 <= entrance && entrance <= max2))
// }
// if(isCheck2(1, 10, entrance)){
//     console.log('ok')
// } else {console.log('ne ok')}
// function isCheck3(min3, max3, numbofflat){
//     return ((min3 && max3 && numbofflat) && (min3 <= numbofflat && numbofflat <= max3))
// }
// if(isCheck3(1, 20, numbofflat)){
//     console.log('ok')
// } else {console.log('ne ok')}
// yourentrance = Math.ceil(flat / (floor * numbofflat))
// console.log('Ваш подъезд' + " " + yourentrance)


// //Task 3
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



// //Task 4
//     var x1,x2,x3,x4,y1,y2,y3,y4;
//     function check(){
//     var x1 = +prompt('введите х1')
//     var x2 = +prompt('введите х2')
//     var x3 = +prompt('введите х3')
//     var x4 = +prompt('введите х4')

//     var y1 = +prompt('введите y1')
//     var y2 = +prompt('введите y2')
//     var y3 = +prompt('введите y3')
//     var y4 = +prompt('введите y4')

//     point1 = [x1, y1];
//     point2 = [x2, y2];
//     point3 = [x3, y3];
//     point4 = [x4, y4];

//     var coordinates = [point1, point2, point3, point4];

//     function isRectangular(points){
//       var a1 = calcSideSize(points[0], points[1]);
//       var b1 = calcSideSize(points[1], points[2]);

//       var a2 = calcSideSize(points[2], points[3]);
//       var b2 = calcSideSize(points[3], points[0]);

//       var c = calcSideSize(points[2], points[0]);

//       if (
//           isRightTriangle(a1, b1, c)
//           && isRightTriangle(a2, b2, c)
//       ) {
//         return alert('Фигура - прямоугольник')
//       } else return alert('Не прямоугольник')
//     };

//     function calcSideSize (start, end) {
//       let x1 = start[0];
//       let y1 = start[1];
//       let x2 = end[0];
//       let y2 = end[1];
//       return (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
//     };

//     function isRightTriangle (a, b, c) {
//       return a + b === c;
//     };

//     isRectangular(coordinates);
// }
// check()



// // Task 5
// function* Getsequence(start, step){
//     start = start || 0;
//     step = step || 1;
//     while(true){
//       yield start;
//       start+=step;
//     }
//   }

//   function call() {
//     var generator = Getsequence(0,1);

//     alert(generator.next().value); // 0
//     alert(generator.next().value); // 1
//     alert(generator.next().value); // 2
//   }
//   call()