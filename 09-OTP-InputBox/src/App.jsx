import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './App.css'


function App() {
  // Create an array of empty strings to represent the input boxes
  const emptyInput = ['', '', '', '']
  // Create an array of refs for each input box
  const ref = [useRef(), useRef(), useRef(), useRef()]
  const [input, setInput] = useState(emptyInput)
  const [submitted, setSubmitted] = useState(false)
  const [invalidOtp, setInvalidOtp] = useState(false)
  const [validOtp, setValidOtp] = useState(false)
  const OTP = 9800


  useEffect(() => {
    // Focus on the first input box when the component mounts
    ref[0].current.focus()
  }, [])

  const handlechange = (e, i) => {
    const value = e.target.value

    if (value !== '' && !/^\d$/.test(value)) return // Only allow numbers to be entered in the input box
    // If the input box is not empty, focus on the next input box
    if (value && i < input.length - 1) {
      ref[i + 1].current.focus()
    }
    const copyInput = [...input]
    copyInput[i] = value
    setInput(copyInput)
    setInvalidOtp(false)
    setValidOtp(false)
  }
  const handledelete = (e, i) => {
    if (e.key === 'Backspace') {
      const copyInput = [...input]
      copyInput[i] = ''
      setInput(copyInput)
      setInvalidOtp(false)
      setValidOtp(false)

      if (!input[i] && i > 0) {
        ref[i - 1].current.focus()
      }
    }
  }
  console.log(input)
  const handlePaste = (e) => {
    const data = e.clipboardData.getData('text')
    console.log(data)

    // Only allow numbers to be pasted in the input box
    if (!/^\d{1,4}$/.test(data)) return
    // Split the pasted data into an array of characters and set the value of each input box
    const pastvalue = data.split('')
    setInput(pastvalue)
    setInvalidOtp(false)
    setValidOtp(false)
    ref[input.length - 1].current.focus()
  }

  const handleclick = () => {
    const joininput = input.join('')
    console.log(joininput)
    if (joininput.length !== 4) {
      setSubmitted(true)
      setValidOtp(false)
      // alert('Please enter 4 digit OTP')
      return
    }
    if (joininput == OTP) {
      setInvalidOtp(false)
      setValidOtp(true)
      alert('OTP is Valid')
    } else {
      setSubmitted(true)
      setInvalidOtp(true)
      setValidOtp(false)
      // alert('Invalid OTP')
    }



  }

  return (
    <main className="otp-page">
      <section className="otp-card">
        <div className="otp-icon" aria-hidden="true">✦</div>
        <p className="otp-eyebrow">SECURITY CHECK</p>
        <h1>OTP Verification</h1>
        <p className="otp-description">Enter the 4-digit code to unlock your next adventure.</p>
      <div className="otp-inputs">
        {
          emptyInput.map((item, i) => (
            <input ref={ref[i]}
              className={`otp-input ${validOtp ? 'otp-input--success' : submitted && (!input[i] || invalidOtp) ? 'otp-input--error' : ''}`}
              value={input[i]}
              onChange={(e) => handlechange(e, i)}
              onKeyDown={(e) => handledelete(e, i)}
              onPaste={handlePaste}
              key={i} type="text" inputMode="numeric" maxLength={1}
              aria-label={`OTP digit ${i + 1}`} />
          ))
        }

      </div>
      <button className="otp-button" onClick={handleclick}>Verify OTP <span aria-hidden="true">→</span></button>
      <p className="otp-footer">Your code is private and secure <span aria-hidden="true">♥</span></p>
      </section>
    </main>
  )
}

export default App