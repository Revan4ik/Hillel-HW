//Task 1

function MakePassword(password){
    return function Passwordvalid(input){
        return input === password;
    };
}
var test = MakePassword('qqq321321');
console.log('valid password =>', test('qqq321321'));
console.log('not valid password =>', test('qqqqqq'));

//Task 2

function getRandom() {
    var arr = [];
    return function getNumbers() {
      var maxNumber = 100;
      var random = Math.ceil(Math.random() * maxNumber);
      if (arr.includes(random)) {
        return getNumbers();
      } else {
        arr.push(random);
        return random;
      }
    };
  }
  
  var test2 = getRandom();
  for (var i = 0; i < 100; i++) {
    console.log('Number =>', test2());
  }
