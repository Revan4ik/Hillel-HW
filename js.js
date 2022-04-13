var min = +prompt ("Введите число от 0 до 59");
if (min >= 0 && min <= 14) {
    console.log('ваше число в 1 четверти');
} else if (min >= 15 && min <= 29 ) {
    console.log('Ваше число в 2 четверти');
} else if (min >= 30 && min <= 44 ){
    console.log('Ваше число в 3 четверти');
} else if (min>= 45 && min <= 59 ){ 
    console.log('Ваше число в 4 четвери');
} else {console.log('Вы ввели не правильное число')}



 var a = '1';
 if (a === '1'){ 
    console.log('Верно');
 } else console.log('Неверно');
 var a = 1;
 if (a === '1'){ 
    console.log('Верно');
 } else console.log('Неверно');
 var a = 3;
 if (a === '1'){ 
    console.log('Верно');
 } else console.log('Неверно');



 var test = confirm('yes/no');
 if (test == false){
    console.log('Верно');
 } else {
    console.log('Неверно')
 }
test == false ? console.log('Верно') : console.log('Неверно');



var a = 5
if (a > 0 && a < 5){
    console.log('Верно')
} else {
    console.log('Неверно')
}
var a = 0
if (a > 0 && a < 5){
    console.log('Верно')
} else {
    console.log('Неверно')
}var a = -3
if (a > 0 && a < 5){
    console.log('Верно')
} else {
    console.log('Неверно')
}var a = 2
if (a > 0 && a < 5){
    console.log('Верно')
} else {
    console.log('Неверно')
}



var num = +prompt('Введите число от 1 до 4')
if (num == 1){
    var result = 'зима'
} else if (num == 2){
    var result = 'весна'
} else if (num == 3){
    var result = 'лето'
} else if (num == 4){
    var result = 'осень'
} else {
    var result = 'ввели неправильное число'
}
console.log(result)