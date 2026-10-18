
import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>EMI Calculator</h2>

      <div onChange={handlechange}>
        <p>Loan Amount:</p>
        <input id="A" type="number" placeholder="Enter loan amount" />

        <p>Interest Rate (% per year):</p>
        <input id="R" type="number" placeholder="Enter interest rate" />

        <p>Duration ({unit})</p>
        <input id="T" type="number" placeholder={`Enter ${unit.toLowerCase()}s`} />

        <button type="button" onClick={() => setunit(unit === 'Year' ? 'Month' : 'Year') }>
          Change to {unit === 'Year' ? 'Months' : 'Years'}
        </button>
      </div>

      <h3>Monthly EMI: ₹{emi.toLocaleString('en-IN')}</h3>
    </div>
  );
}

export default App;
