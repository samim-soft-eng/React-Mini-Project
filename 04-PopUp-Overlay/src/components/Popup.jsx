import React, { useState } from 'react'

function Popup() {
    const [showOffer, setShowOffer] = useState(false)
    const [acceptOffer, setAcceptOffer] = useState(false)

    const handleshow = () => {
        setShowOffer(true)
    }
    const handleclear = () => {
        setShowOffer(false)
    }
    const handleoutside = (e) =>{
        console.log(e.target.className)
        if(e.target.className === "outerbox"){
            handleclear()
        }
    }
    const handleAccept = () => {
        setAcceptOffer(true)
        setShowOffer(false)
    }

    return (
        <div>
            <div class="">
                {
                    !acceptOffer ?
                        (!showOffer ? <button onClick={handleshow}>Show Offer</button>
                            :
                            <div class="outerbox" onclick={handleoutside}>
                                <div class="showofferbox">
                                    <button onClick={handleclear} class="clear-bnt">x</button>
                                    <p>Your Offer is Here</p>
                                    <br />
                                    <button onClick={handleAccept}>Accept Offer</button>
                                </div>

                            </div>)
                        :
                        (<p>Congratulation! You Accept The Offer</p>)
                }
            </div>
        </div>
    )
}

export default Popup
