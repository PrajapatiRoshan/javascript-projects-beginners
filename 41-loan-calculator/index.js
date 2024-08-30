function calculateLoan() {
  const loanAmountValue = document.getElementById('loan-amount').value;
  const interestRateValue = document.getElementById('interest-rate').value;
  const MonthsToPayValue = document.getElementById('months-to-pay').value;

  if (!Number(MonthsToPayValue) || !Number(interestRateValue)) return;

  const interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;
  const monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

  document.getElementById('payment').innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
calculateLoan();
