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
var str3 = '2012/09/18 12:10';
var str4 = '2013/09/09 09:09'
var reg3 = /^((1[0-9][0-9][0-9])|((200[0-9])|(201[0-2])))/;
console.log(str3 + " " + 'result => ' + reg3.test(str3));
console.log(str4 + " " + 'result => ' + reg3.test(str4));

//Task4
var str5 = 'Extra   spaces';
var str6 = 'Sentence.   Sentence.'
var reg4 = /(   )/;
var reg5 = /(.   )/;
console.log(str5 + " " + '=>' + " " + str5.replace(reg4, ' '))
console.log(str6 + " " + '=>' + " " + str6.replace(reg4, '  '))