import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [api, setapi] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setapi(res.data)
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fatchData()
  }, [])

  const handleleft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(api.length - 1)
    } else {
      setCurrentIndex((pre) => pre-1)
    }
  }

  const handleright = () => {
    if (currentIndex === api.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((pre) => pre+1)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleright()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])

  // if (api.length === 0) {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <button onClick={handleleft}>{"<"}</button>
      {/* ? is needed to check if api[currentIndex] is defined before trying to access its properties. This prevents potential errors when the api array is empty or the currentIndex is out of bounds. */}
      <img src={api[currentIndex]?.image} alt={api[currentIndex]?.title} />
      <button onClick={handleright}>{">"}</button>
    </div>
  )
}

export default App