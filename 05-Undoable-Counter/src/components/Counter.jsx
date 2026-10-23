import React, { useState } from 'react'

function Counter() {
    const [count,setcount] = useState(0)


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