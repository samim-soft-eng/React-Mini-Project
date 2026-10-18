
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [amount, setamount] = useState(0);
  const [rate, setrate] = useState(0);
  const [tune, settune] = useState(0);
  const [emi, setemi] = useState(0);
  const [unit, setunit] = useState('Year');

  const handlechange = (e) => {
    const id = e.target.id;
    const value = Number(e.target.value);

    if (id === 'A') setamount(value);
    else if (id === 'R') setrate(value);
    else if (id === 'T') settune(value);
  };

  const calculateEMI = () => {
    if (amount <= 0 || rate < 0 || tune <= 0) {
      setemi(0);
      return;
    }

    const r = rate / 12 / 100;
    const n = unit === 'Year' ? tune * 12 : tune;

    if (r === 0) {
      setemi(Math.round(amount / n));
      return;
    }

    const pow = Math.pow(1 + r, n);
    const total = amount * (r * pow) / (pow - 1);

    setemi(Math.round(total));
  };

  useEffect(() => {
    calculateEMI();
  }, [amount, rate, tune, unit]);

  return (
    <main className="emi-page">
      <section className="emi-card">
        <header className="emi-header">
          <span className="emi-eyebrow">SMART MONEY TOOL</span>
          <h1>EMI <span>Calculator</span></h1>
          <p>Plan your next big move with confidence.</p>
        </header>

        <div className="emi-fields" onChange={handlechange}>
          <div className="emi-field">
            <p>Loan Amount</p>
            <div className="emi-input-wrap">
              <span className="emi-prefix">₹</span>
              <input id="A" type="number" placeholder="Enter loan amount" />
            </div>
          </div>

          <div className="emi-field">
            <p>Interest Rate <span>(% per year)</span></p>
            <div className="emi-input-wrap">
              <input id="R" type="number" placeholder="Enter interest rate" />
              <span className="emi-suffix">%</span>
            </div>
          </div>

          <div className="emi-field">
            <p>Duration <span>({unit})</span></p>
            <div className="emi-input-wrap">
              <input id="T" type="number" placeholder={`Enter ${unit.toLowerCase()}s`} />
              <span className="emi-suffix">⌄</span>
            </div>
          </div>

          <button className="emi-unit-button" type="button" onClick={() => setunit(unit === 'Year' ? 'Month' : 'Year') }>
            Change to {unit === 'Year' ? 'Months' : 'Years'} <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="emi-result">
          <span className="emi-result-label">YOUR MONTHLY EMI</span>
          <h2>₹{emi.toLocaleString('en-IN')}</h2>
          <span className="emi-result-note">Estimated monthly payment</span>
        </div>
        <footer className="emi-footer"><span /> SMALL STEPS. BIG PLANS. <span /></footer>
      </section>
    </main>
  );
}

export default App;
