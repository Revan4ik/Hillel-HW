class Child1and2 extends Descendants1{
    constructor(name, price, reliability, repairtime){
        super(name, price,reliability)
        this.repairtime = repairtime
    }
    checkPiston(){
        return console.log('')
    }
    checkcylinder(){
        return console.log('')
    }
}
const Piston = new Child1and2('Piston', '99$', '99%', '2hours')
const cylinder = new Child1and2('cylinder', '400$', '90%', '1day')
console.log(Piston)
console.log(cylinder)
class Child3and4 extends Descendants2{
    constructor(name, price, type, areavailable){
        super(name, price,type)
        this.areavailable = areavailable
    }
    checkClutch(){
        return console.log('')
    }
    checkdifferential(){
        return console.log('')
    }
}
const Clutch = new Child3and4('Clutch', '92$', 'back', 'true')
const differential = new Child3and4('differential', '200$', 'front', 'false')
console.log(Clutch)
console.log(differential)
class Child5and6 extends Descendants3{
    constructor(name, price, amount, weight){
        super(name, price, amount)
        this.weight = weight
    }
    checkshockabsorberpiston(){
        return console.log('')
    }
    checkstoragetank(){
        return console.log('')
    }
}
const shockabsorberpiston = new Child5and6('shockabsorberpiston', '15$', '2', '100g')
const storagetank = new Child5and6('storagetank', '30$', '3', '200g')
console.log(shockabsorberpiston)
console.log(storagetank)