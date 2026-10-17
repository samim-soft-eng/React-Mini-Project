import React, { useState } from 'react'
import { useEffect } from 'react'

function QAitems({ idx, q }) {
    const [show, setshow] = useState(false)

    // useEffect(() => {
    //     if (idx == 0) {
    //         setshow(true)
    //     }
        
    // }, [])
    const handleshow = () => {
        setshow(show ? false : true )
    }
    return (
        <div>
            <div onClick={handleshow}>
                <button > . </button>
                <h2>{idx + 1}. {q.question}</h2>
                {show && <h3>Ans. {q.correct_answer}</h3>}
            </div>

        </div>
    )
}

export default QAitems