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

