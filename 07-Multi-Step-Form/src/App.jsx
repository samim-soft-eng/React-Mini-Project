import React from 'react'
import { useState } from 'react'

function App() {
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [count, setCount] = useState(0)

  const handleNameChange = (e) => {
    const AllDataCopy = { ...allData }
    AllDataCopy[e.target.name] = e.target.value
    setAllData(AllDataCopy)
  }
  const handleNext = (e) => {
    e.preventDefault()
    alert("Data Sent successfully")
    setCount(count + 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(allData.name + ' ' + allData.email + ' ' + allData.password)
    console.log(allData)
    setCount(0)
    setAllData({
      name: "",
      email: "",
      password: ""
    })
  }
  return (
    <form onSubmit={count === 2 ? handleSubmit : handleNext}>
      <h1>Multi Step Form</h1>
      <div >
        {
          count === 0 && (
            <div>
              Name: <input onChange={handleNameChange} type="text" name="name" required />
            </div>
          )
        }
      </div>
      <div>
        {
          count === 1 && (
            <div>
              Email: <input onChange={handleNameChange} type="email" name="email" required />
            </div>
          )
        }
        {
          count === 2 && (
            <div>
              Password: <input onChange={handleNameChange} type="password" name="password" required />
            </div>
          )
        }
      </div>
      {
        count < 2 ? (
          <button type="submit">Next</button>
        ) :
          <button type="submit">Submit</button>
      }


    </form>
  )
}

export default App