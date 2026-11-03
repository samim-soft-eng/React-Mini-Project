import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [food, setFood] = useState('')
  const [suggestion, setSuggestion] = useState([])
  const [selected, setSelected] = useState([])

  const handleinput = (e) => {
    console.log(e.target.value)
    setFood(e.target.value)
  }

  const fatchapi = async (food) => {
    const res = await fetch(`https://api.frontendeval.com/fake/food/${food}`)
    const data = await res.json()
    // console.log(data)
    setSuggestion(data)
  }

  useEffect(() => {
    if (food.length >= 2) {
      fatchapi(food)
    }
  }, [food])

  const handleitem = (e) => {
    const id = e.target.getAttribute('d-id');
    if (id) {
      const obj = {
        id: Date.now(),
        name: suggestion[id],
        isdone: false
      }
      const copybucket = [...selected]
      copybucket.push(obj)
      setSelected(copybucket)
    }
    setFood('')
  }
  console.log(selected)

  const handleadd = (id) => {
    const copybucket = [...selected]
    const index = copybucket.findIndex((item) => item.id === id)
    if (index !== -1) {
      copybucket[index].isdone = true
      setSelected(copybucket)
    }
  }

  const handleRemove = (id) => {
    const copybucket = [...selected]
    const index = copybucket.findIndex((item) => item.id === id)
    if (index !== -1) {
      copybucket.splice(index, 1)
      setSelected(copybucket)
    }
  }   

  return (
    <div>
      <h1>My Shopping List</h1>

      <div className='input'>
        <input type="text" value={food} onChange={handleinput} />
      </div>
      <div>
        {
          food.length >= 2 ? <div onClick={handleitem}>
            {
              suggestion.map((item, index) => (
                <div d-id={index}>{item}</div>
              ))
            }
          </div> : null
        }
      </div>
      <div>
        <p>Selected:</p>
        {
          selected.map((item) => (
            <div>
              <button onClick={() => handleadd(item.id)}>+</button>
              <p>{item.name}</p>
              <button onClick={() => handleRemove(item.id)}>-</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App