import React, { useEffect, useState } from 'react'
import './App.css'

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

  const handleResume = () => {
    setChangePause(false)
    setInterval(runtimer(hour, min, sec))
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
    <main className="timer-page">
      <div className="timer-orbit timer-orbit-one" aria-hidden="true" />
      <div className="timer-orbit timer-orbit-two" aria-hidden="true" />
      <section className="timer-card">
        <header className="timer-header">
          <span className="timer-kicker">TIME MACHINE // 001</span>
          <h1>CountDown <span>Timer</span></h1>
          <p className="timer-subtitle">Make every second count.</p>
        </header>
        {
          !state ?
            <div className="timer-inputs" onChange={handlevalue}>
              <label className="timer-input-wrap">
                <input id='hour' type="text" placeholder='HH' />
                <span>HOURS</span>
              </label>
              <span className="input-separator">:</span>
              <label className="timer-input-wrap">
                <input id='min' type="text" placeholder='MM' />
                <span>MINUTES</span>
              </label>
              <span className="input-separator">:</span>
              <label className="timer-input-wrap">
                <input id='sec' type="text" placeholder='SS' />
                <span>SECONDS</span>
              </label>
            </div>
            :
            <div className="timer-display">
              <div className="timer-digit">{hour < 10 ? `0${hour}` : hour}</div>
              <span className="timer-colon">:</span>
              <div className="timer-digit">{min < 10 ? `0${min} ` : min}</div>
              <span className="timer-colon">:</span>
              <div className="timer-digit">{sec < 10 ? `0${sec}` : sec}</div>
            </div>
        }
        <div className="timer-controls">
          {
            !change ? <button className="timer-button timer-button-start" onClick={handleStart}><span>▶</span> Start</button> :
              <div className="timer-active-controls">
                <div className="timer-pause-wrap">
                  {
                    !changePause ?
                      <button className="timer-button timer-button-pause" onClick={handlepause}><span>Ⅱ</span> Pause</button>
                      :
                      <button className="timer-button timer-button-resume" onClick={handleResume}><span>▶</span> Resume</button>
                  }
                </div>
                <button className="timer-button timer-button-reset" onClick={handlereset}><span>↺</span> Reset</button>
              </div>

          }
        </div>
        <footer className="timer-footer"><span className="status-light" /> READY WHEN YOU ARE</footer>
      </section>
    </main>
  )
}

export default App