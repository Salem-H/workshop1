function calculate(loanAmount, interestRate, loanTermInYears) {
    
const a = loanAmount * 1000;
const b = interestRate / 100 / 12 ;
const c = loanTermInYears * 12;

const monthlyPayment = a * ((b * ((1 + b) ** c)) / (((1 + b) ** c) - 1));
return monthlyPayment
}

console.log(calculate(200, 4, 30))

// function calculateMonthlyPayment(principalLoanAmountInK, yearlyInterestRate, termInYears) {
//     const monthlyInterestRate = yearlyInterestRate / 12;
//     const numberOfPayments = termInYears * 12;
//     const P = principalLoanAmountInK * 1000;
//     const r = monthlyInterestRate / 100; // (annual rate divided by 12)
//     const n = numberOfPayments; //(loan term in months)
//     const M = P * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1));
//     const monthlyPayment = M;
//     return monthlyPayment
// }
// console.log(calculateMonthlyPayment(200, 4, 30))