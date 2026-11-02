import React, { useState } from 'react'

function Counter() {
    const [count,setcount] = useState(0)
    const [history,sethistory] = useState([])

    const maintainhistory = (key,pre,curr) => {
        console.log(key,pre,curr)
        const obj = {
            action: key,pre,curr
        }
        const copyhistory = {...history}
        copyhistory.unshift(obj)
        sethistory(copyhistory)
    }

    const handleclick = (key) => {
        const val = parseInt(key)
        console.log(key)
        maintainhistory(key,count,val+count)
        setcount((existingValue) => existingValue + val)
    }


    // My simple code Logic  
    // const handled = (e) => {
    //     let res = e.target.id
    //     console.log(res)
    //     // Decrease Logic
    //     if(res == 'd1'){
    //         (setcount(count-1))
    //     }else if(res == 'd2'){
    //         (setcount(count-10))
    //     }else if(res == 'd3'){
    //         (setcount(count-100))
    //     }
    //     console.log(res)

    //     // Increase Logic
    //     if(res == 'i1') (setcount(count+1))
    //     else if(res == 'i2') (setcount(count+10))
    //     else if(res == 'i3') (setcount(count+100))
    // }

    return (
        <div>
            <h1>Undoable Counter</h1>
            <div>
                <button>Undo</button>
                <button>Redo</button>
            </div>
            <div>
                {
                    [-100,-10,-1].map((btn) => (
                        <button onClick={() => handleclick(btn)}>{btn}</button>
                    ))
                }
            </div>
            <h1>{count}</h1>
            <div>
                {
                    ['+1','+10','+100'].map((btn) => (
                        <button onClick={() => handleclick(btn)}>{btn}</button>
                    ))
                }
            </div>
            <div>
                {
                    history.map((item) => (
                        <div>{item.action}</div>
                    ))
                }
            </div>


        </div>















        // My simple Logic code
        // <div>
        //     <h1>Undoable Counter</h1>
        //     <div>
        //         <button>Undo</button>
        //         <button>Redo</button>
        //     </div>
        //     <div>
        //         <div onClick={handled}>
        //             <button id="d1">-1</button>
        //             <button id='d2'>-10</button>
        //             <button id='d3'>-100</button>
        //         </div>
        //         <div>
        //             <h1>{count}</h1>
        //         </div>
        //         <div onClick={handled}>
        //             <button id='i1'>+1</button>
        //             <button id='i2'>+10</button>
        //             <button id='i3'>+100</button>
        //         </div>
        //     </div>
            

        // </div>
    )
}

export default Counter