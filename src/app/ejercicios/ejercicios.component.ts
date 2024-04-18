
import { Component } from '@angular/core';

Component ({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})


interface Loan {
  principal: number;
  interestRate: number;
}

interface ConventionalLoan extends Loan{

  months: number;

}

export class EjerciciosComponent {



  calculateInterestOnlyLoanPayment(loanTerms: Loan) {
    
    let interest = loanTerms.interestRate / 1200; 
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }

  ejemploInterest(): void {
    let loan = {
      principal: 30000,
      interestRate: 5
    } as Loan;

    let payment = this.calculateInterestOnlyLoanPayment(loan);
    console.log(payment);
  }

  calculateConventionalLoanPayment(loanTerms: ConventionalLoan) {

    let interest = loanTerms.interestRate / 1200; 
    let payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
  }

  ejemploConvencionalCalculoPago(): void {
    let loan = {
      principal: 10000,
      interestRate: 5,
      months: 12
    } as ConventionalLoan;

    let payment = this.calculateConventionalLoanPayment(loan);
    console.log(payment);
  }
}

const ejerciciosComponent = new EjerciciosComponent();
ejerciciosComponent.ejemploInterest();
ejerciciosComponent.ejemploConvencionalCalculoPago();
// Crear un objeto para los términos del préstamo
let loanTerms: Loan = { principal: 30000, interestRate: 5 };

let interestOnlyPayment = ejerciciosComponent.calculateInterestOnlyLoanPayment(loanTerms);

let conventionalLoanTerms: ConventionalLoan = { principal: 30000, interestRate: 5, months: 180 };

let conventionalPayment = ejerciciosComponent.calculateConventionalLoanPayment(conventionalLoanTerms);

  console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
  console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"


