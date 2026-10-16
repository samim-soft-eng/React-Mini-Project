import React, { useEffect, useState } from 'react'

function App() {
  const [hour, sethour] = useState(0)
  const [min, setmin] = useState(0)
  const [sec, setsec] = useState(0)
  const [state, setstate] = useState(false)
  const [change, setchange] = useState(false)
  const [nowTime, setNowTime] = useState(0)
  const [changePause, setChangePause] = useState(false)


  const handlevalue = (e) => {
    const id = (e.target.id)
    const value = e.target.value
    if (id == 'hour') sethour(value)
    else if (id == 'min') setmin(value)
    else if (id == 'sec') setsec(value)
  }


  const runtimer = (h, m, s, t) => {
    if (sec > 0) {
      setsec((s) => s - 1)
    } else if (sec == 0 && min > 0) {
      setmin((m) => m - 1)
      setsec(59)
    } else {
      sethour((h) => h - 1)
      setmin(59)
      setsec(59)
    }



  }

  const handleStart = () => {
    if (hour === 0 && min === 0 && sec === 0) {
      alert("Invalid Input")
      return
    }
    setchange(true)
    setstate(true)
  }
  const handlereset = () => {
    setchange(false)
    setstate(false)
    sethour(0)
    setmin(0)
    setsec(0)
    clearInterval(nowTime)
  }

  const handlepause = () => {
    setChangePause(true)
    clearInterval(nowTime)
  }

  const handleResume = () =>{
    setChangePause(false)
    setInterval(runtimer(hour,min,sec))
  }

  useEffect(() => {
    let timer
    if (change) {
      timer = setInterval(() => {
        runtimer(hour, min, sec, timer)
      }, 1000)

      if (hour === 0 && min === 0 && sec === 0) {
        clearInterval(timer)
        alert("Timer Finish")
        setchange(false)
        setstate(false)
      }

      setNowTime(timer)
    }
    if (hour === 0 && min === 0 && sec === 0) {
      clearInterval(timer)
      setchange(false)
    }

    return () => {
      clearInterval(timer)
    }
  }, [state, change, hour, min, sec])

  return (
    <div>
      <div>
        <h1>CountDown Timer</h1>
        <br />
        {
          !state ?
            <div onChange={handlevalue}>
              <input id='hour' type="text" placeholder='HH' />
              <input id='min' type="text" placeholder='MM' />
              <input id='sec' type="text" placeholder='SS' />
            </div>
            :
            <div>
              <div>{hour < 10 ? `0${hour}` : hour}</div> <span>:</span>
              <div>{min < 10 ? `0${min} ` : min}</div> <span>:</span>
              <div>{sec < 10 ? `0${sec}` : sec}</div>
            </div>
        }
      </div>
      <div>
        {
          !change ? <button onClick={handleStart}>Start</button> :
            <div>
              <div>
                {
                  !changePause ?
                    <button onClick={handlepause}>Pause</button>
                    :
                    <button onClick={handleResume}>Resume</button>
                }
              </div>
              <button onClick={handlereset}>Reset</button>
            </div>

        }

      </div>

    </div>
  )
}

export default App