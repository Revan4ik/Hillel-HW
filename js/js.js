//Task 1
var str1 = 'ahb acb aeb aeeb adcb axeb'
var reg1 = /a.b/igm
var res1 = str1.match(reg1)
console.log('Task1 result => ' + res1)

//Task2
var str2 = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
var reg2 = /[*]q+[+]/igm
var res2 = str2.match(reg2)
console.log('Task2 result => ' + res2)

//Task3
function reg3() {
    var str3 = "2012/09/18 12:10"; // true
    var str4 = "2013/09/09 09:09"; // false
    var reg3 =
      /^([1000-2012]{4})\/[0-1][0-9]\/[0-3][0-9]\s[0-2][0-9]\:[0-5][0-9]$/g;
    return console.log('2012/09/18 12:10' + " " + '=>' + " " + reg3.test(str3)
    + "\n" + '2013/09/09 09:09' + " " + '=>' + " " + reg3.test(str4));
  }
  reg3();

//Task4
var str5 = 'Extra   spaces';
var str6 = 'Sentence.   Sentence.'
var reg4 = / +/g;
var reg5 = /\. +/g;
console.log(str5 + " " + '=>' + " " + str5.replace(reg4, ' '))
console.log(str6 + " " + '=>' + " " + str6.replace(reg4, '  '))