import React from 'react'
import { useRef, useEffect, useState } from 'react'


function App() {
  // Create an array of empty strings to represent the input boxes
  const emptyInput = ['', '', '', '']
  // Create an array of refs for each input box
  const ref = [useRef(), useRef(), useRef(), useRef()]
  const [input, setInput] = useState(emptyInput)
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
  }
  const handledelete = (e, i) => {
    if (e.key === 'Backspace') {
      const copyInput = [...input]
      copyInput[i] = ''
      setInput(copyInput)

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
    ref[input.length - 1].current.focus()
  }

  const handleclick = () => {
    const joininput = input.join('')
    console.log(joininput)
    if (joininput.length !== 4) {
      alert('Please enter 4 digit OTP')
      return
    }
    if (joininput == OTP) {
      alert('OTP is Valid')
    } else {
      alert('Invalid OTP')
    }



  }

  return (
    <div>
      <h1>OTP Verification</h1>
      <div>
        {
          emptyInput.map((item, i) => (
            <input ref={ref[i]}
              value={input[i]}
              onChange={(e) => handlechange(e, i)}
              onKeyDown={(e) => handledelete(e, i)}
              onPaste={handlePaste}
              key={i} type="text" maxLength={1} />
          ))
        }

      </div>
      <button onClick={handleclick}>Verify OTP</button>
    </div>
  )
}

export default App