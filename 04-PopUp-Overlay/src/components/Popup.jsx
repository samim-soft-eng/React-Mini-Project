import { useState } from 'react'

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
        if(e.target.className === "offer-overlay"){
            handleclear()
        }
    }
    const handleAccept = () => {
        setAcceptOffer(true)
        setShowOffer(false)
    }

    return (
        <main className="offer-page">
            {!acceptOffer ? (
                <>
                    <section className="offer-card" aria-labelledby="offer-title">
                        <span className="offer-stamp" aria-hidden="true">GOOD<br />STUFF</span>
                        <p className="offer-eyebrow">A little something for you</p>
                        <h1 className="offer-title" id="offer-title">
                            Big offer.<br /><span>Big energy.</span>
                        </h1>
                        <p className="offer-description">
                            We saved a little surprise just for you. Ready to see what it is?
                        </p>
                        <button className="offer-button" onClick={handleshow}>
                            Show me the offer <span aria-hidden="true">↗</span>
                        </button>
                    </section>
                    {showOffer && (
                        <div className="offer-overlay" onClick={handleoutside}>
                            <section
                                className="offer-dialog"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="dialog-title"
                            >
                                <button
                                    onClick={handleclear}
                                    className="close-button"
                                    aria-label="Close offer"
                                >
                                    ×
                                </button>
                                <p className="dialog-label">Your moment has arrived</p>
                                <h2 className="dialog-title" id="dialog-title">
                                    Your offer<br />is <span>here!</span>
                                </h2>
                                <button className="offer-button dialog-accept" onClick={handleAccept}>
                                    Accept offer <span aria-hidden="true">✳</span>
                                </button>
                            </section>
                        </div>
                    )}
                </>
            ) : (
                <section className="offer-card success-card" aria-labelledby="success-title">
                    <span className="success-mark" aria-hidden="true">✓</span>
                    <p className="offer-eyebrow">It's official</p>
                    <h1 className="offer-title" id="success-title">
                        You're <span>in!</span>
                    </h1>
                    <p className="offer-description">
                        Congratulations! You accepted the offer. Good things are coming.
                    </p>
                </section>
            )}
        </main>
    )
}

export default Popup

