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
        <div>
            <h1>All Question And Answer</h1>
            {
                questions.map((q, idx) => (
                    <QAitems key={idx} idx={idx} q={q} 
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}/>

                ))
            }
        </div>
    )
}

export default FatchApi