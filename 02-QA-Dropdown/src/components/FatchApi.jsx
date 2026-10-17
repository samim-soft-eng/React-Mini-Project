import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QAitems from './QAitems'

function FatchApi() {
    const [questions, setquestions] = useState([])
    const [activeIndex, setActiveIndex] = useState(null);

    const getApi = async () => {
        try {
            const res = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple")
            console.log(res.data.results)
            setquestions(res.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getApi()
    }, [])
    return (
        <section className="qa-shell">
            <header className="qa-heading">
                <span className="qa-eyebrow">THE QUICK-FIRE QUIZ</span>
                <h1>Curious <span>minds</span><br />start here<span className="qa-heading-mark">.</span></h1>
                <p>Pick a question. Reveal what you know.</p>
            </header>
            <div className="qa-list">
            {
                questions.map((q, idx) => (
                    <QAitems key={idx} idx={idx} q={q} 
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}/>

                ))
            }
            </div>
            <footer className="qa-footer"><span /> ONE QUESTION AT A TIME <span /></footer>
        </section>
    )
}

export default FatchApi