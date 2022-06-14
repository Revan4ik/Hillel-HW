class Descendants1 extends Car{
    constructor(name, price, reliability){
        super(name, price)
        this.reliability = reliability
    }
    checkMotor(){
        return console.log('')
    }
}
class Descendants2 extends Car{
    constructor(name, price, type){
        super(name, price)
        this.type = type
    }
    checkTransmission(){
        return console.log('')
    }
}
class Descendants3 extends Car{
    constructor(name, price, amount){
        super(name, price)
        this.amount = amount
    }
    checkshockabsorbers(){
        return console.log('')
    }
}
const motor = new Descendants1('motor', '400$', '90%')
const Transmission = new Descendants2('Transmission', '250$', 'back')
const shockabsorbers = new Descendants3('shockabsorbers', '100$', '4')
console.log(motor)
console.log(Transmission)
console.log(shockabsorbers)