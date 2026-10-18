import React, { useEffect, useState } from 'react'

function App() {
  const [amount, setamount] = useState(0)
  const [rate, setrate] = useState(0)
  const [tune, settune] = useState(0)
  const [emi,setemi] = useState(0)

  const handlechange = (e) => {
    const id = e.target.id
    const value = Number(e.target.value)
    // console.log(id,value)

    if (id === 'A') setamount(value)
    else if (id === 'R') setrate(value)
    else if (id === 'T') settune(value)
  }

  const calculateEMI = () => {
    let r = rate
    if (amount && r && tune) {
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1+r,tune*12)
      const total = amount * ((r * calcPow) / (calcPow - 1))
      setemi(Math.round(total));
    }
  }
    useEffect(() => {
      calculateEMI()
    },[amount,rate,tune])

    return (
      <div>
        <h2>EMI Calculator</h2>
        <div onChange={handlechange}>
          <p>Loan Amount :</p>
          <input id='A' type="number" placeholder='Enter Loan Amout' /><span>$</span>
          <p>Intarest Rate :</p>
          <input id='R' type="number" placeholder='Enter Interest %' /><span>%</span>
          <p>Duration </p>
          <input id='T' type="number" placeholder='Year/Month' />
        </div>
        <div>
          Your EMI is {emi}
        </div>
      </div>
    )
  }

  export default App