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
        <article className={`qa-item${show ? ' qa-item-open' : ''}`}>
            <button
                className="qa-question"
                type="button"
                onClick={handleshow}
                aria-expanded={show}
                aria-controls={`qa-answer-${idx}`}
            >
                <span className="qa-arrow" aria-hidden="true">&gt;</span>
                <span className="qa-number">{String(idx + 1).padStart(2, '0')}</span>
                <span className="qa-question-text">{q.question}</span>
            </button>
            {show && (
                <div className="qa-answer" id={`qa-answer-${idx}`}>
                    <span className="qa-answer-label">ANSWER</span>
                    <h3>{q.correct_answer}</h3>
                </div>
            )}
        </article>
    )
}

export default QAitems