let monica = {
    name: 'Monica Geller',
    total: 400,
    deductMonthlyFee: function(fee) {
        this.total = this.total - fee;
        return `${this.name} remaining balance is ${this.total}`;
    }
};

let rachel = {name: 'Rachel Green', total: 1500};
let rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel, 200);
console.log(rachelFeeDeductor());
console.log(rachelFeeDeductor());

let ross = {name: 'Ross Geller', total: 250};
let rossFeeDeductor = monica.deductMonthlyFee.bind(ross, 25);
console.log(rossFeeDeductor());
console.log(rossFeeDeductor());

// If an older browser didn't have bind function then what?
Function.prototype.bind = Function.prototype.bind || function(context) {
    let self = this;
    return function() {
        return self.apply(context, arguments);
    };
}
