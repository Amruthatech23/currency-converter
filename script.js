const ratesToINR = {
  USD: 83.2,
  EUR: 90.5,
  GBP: 106.7,
  JPY: 0.57,
  AUD: 55.4,
  CAD: 61.2,
  CHF: 94.6,
  SGD: 61.5,
  MYR: 17.9,
  THB: 2.3,
  AED: 22.7,
  SAR: 22.2,
  IDR: 0.0052,
  BDT: 0.76,
  QAR: 22.9,
  CNY: 11.4,
  KRW: 0.064,
  NPR: 0.63,
  VND: 0.0033
};


function convertToINR() {
  const currency = document.getElementById('currency').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const resultEl = document.getElementById('result');

  if (isNaN(amount) || amount <= 0) {
    resultEl.innerText = "Please enter a valid amount.";
    return;
  }

  const rate = ratesToINR[currency];
  const converted = (amount * rate).toFixed(2);

  resultEl.innerText = `${amount} ${currency} = ₹${converted} INR`;
}
