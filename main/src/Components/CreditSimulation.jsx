import React, { useState, useEffect } from "react";
import "../Css/CreditSimulation.css";

const CreditSimulation = () => {
  const [price, setPrice] = useState(56690);
  const [interestRate, setInterestRate] = useState(12);
  const [period, setPeriod] = useState(12);
  const [downPayment, setDownPayment] = useState(24480);
  const [monthlyPayment, setMonthlyPayment] = useState(2878);

  // Hàm tính toán số tiền trả hàng tháng
  const calculateMonthlyPayment = () => {
    const loanAmount = price - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = period;

    const monthlyPaymentCalc = 
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
  };

  // Tự động tính toán lại khi các giá trị thay đổi
  useEffect(() => {
    calculateMonthlyPayment();
  }, [price, interestRate, period, downPayment]);

  return (
    <div className="credit-simulation">
      <div className="credit-simulation-container">
        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Period in Months</label>
          <select value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
            <option value={12}>12 Months</option>
            <option value={24}>24 Months</option>
            <option value={36}>36 Months</option>
            <option value={48}>48 Months</option>
          </select>
        </div>
        <div className="input-group">
          <label>Down Payment</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>
        <div className="monthly-payment">
          <label>Monthly Payment</label>
          <div className="payment-amount">${monthlyPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulation;
