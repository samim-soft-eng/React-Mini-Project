import React, { useState } from 'react'
import { useEffect } from 'react'

function QAitems({ idx, q,activeIndex,setActiveIndex }) {
    const [show, setshow] = useState(false)

    useEffect(() => {

        setshow(activeIndex == idx);

    }, [activeIndex, idx]);

    const handleshow = () => {
        setActiveIndex(activeIndex == idx ? null : idx);
    };

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