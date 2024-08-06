import React, { useState } from 'react'

const Footer = () => {
    const [count, setCount] = useState(0)
    let updatedCount = count
    function handleTangCountClick() {
    
    }
    console.log('re-render')

    return (
        <div className='bg-blue'>
            <button
                onClick={handleTangCountClick}
            >
                Tang count
            </button>
            count hien tai: {count}
        </div>
    )
}

export default Footer