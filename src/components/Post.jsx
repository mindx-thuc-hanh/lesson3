import React, { useState } from 'react'

// html
const Post = (props) => {

    const stateObj = useState(0)
    const removeItem = props.removeItem

    const tangCount = () => {
        const newCount = stateObj[0] + 1
        const setCount = stateObj[1]
        setCount(newCount)
    }
    return (
        <div className='border w-20 flex flex-col p-5 pt-10'>
            <div>
                sold out:{stateObj[0]}
            </div>
            <button
                onClick={tangCount}
            >
                Add to cart
            </button>
            <hr />
            <div>
                userId: {
                    props.studentName
                }
            </div>
            <div>
                title:  {
                    props.studentClass
                }
            </div>
            <button onClick={() => {
               removeItem(props.studentName)
            }} className='bg-red' >Xoa</button>

        </div>
    )
}

export default Post