const worker = {
    name: '',
    surname: '',
    rate: '',
    days: '',
    getsalary: () => {
        console.log(this.rate * this.days)
    },
}

const cashier = {
    daysales: [],
    salesreport: () => {
        console.log(daysales[0])
    },
    _prototype_: Worker,    
}
const consultant = {
    product: [],
    informationaboutproduct: () => {
        console.log(product[0])
    },
    _prototype_: Worker,

}
const admin = {
    principalstaff: [],
    addStaff: () => {
        console.log(principalstaff[0])
    },
    removeStaff: () => {
        console.log(principalstaff[0])
    },
    _prototype_: Worker,
}
