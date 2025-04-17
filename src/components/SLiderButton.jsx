import React from 'react'

const SLiderButton = ({learn, quote }) => {
    return (
        <div>
            <button className='learnMoreBtn'>{learn}</button>
            <button className='quoteBtn'>{quote}</button>
        </div>
    )
}

export default SLiderButton