import React, { useState } from 'react'
import Post from './Post'


// function component


// Object (Array, Object)
const currentPostList = [
    // => <Post studentName={currentPostList[0].userId} studentClass={currentPostList[0].title}/>
    {
        userId: 'Student1',
        title: 'Class1'
    },
    {
        userId: 'Student2',
        title: 'Class2'
    },
    {
        userId: 'Student3',
        title: 'Class3'
    },
    {
        userId: 'Student4',
        title: 'Class4'
    },
    {
        userId: 'Student5',
        title: 'Class4'
    },
    {
        userId: 'Student9',
        title: 'Class4'
    },
    {
        userId: 'Student10',
        title: 'Class6'
    },
]
const Content = (props) => {
    // request -> server (backend) -> response 
    // let count = 0
    // const setCount = (newCount) => {
    //     count = newCount
    //     console.log(count)
    // }
    const [listPost, setListPost] = useState(currentPostList)
    // [listPost, setListPost]

    const addPost = () => {
        const newPost = {
            userId: 100,
            title: 'New user id 100'
        }
        const newListPost = [...listPost]
        newListPost.push(newPost)
        setListPost(newListPost)
    }
    const fetchPosts = async () => {
        // baseURL
        // axios, await fetch('https://myserver.com/posts')
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        const newListPost = [...listPost]
        newListPost.push(...data)
        setListPost(newListPost)
    }

    const removeItem =(id)=>{
        setListPost(prev => {
            const newPostList = prev.filter(v => v.userId !== id)
            return newPostList
        })
    }

    return (
        <div>
            <div className='w-80 flex gap-10 flex-wrap justify-center'>
                {
                    listPost.map((post, index) =>
                        <Post
                            key={index}
                            studentName={post.userId}
                            studentClass={post.title}
                            userInformation={props.userInformation}
                            removeItem={removeItem}
                        />
                    )
                }
            </div>
            <div className='w-100 flex gap-10 justify-center mt-10'>
                <button
                    onClick={fetchPosts}
                >
                    Fetch post list
                </button>
                <button
                    onClick={addPost}
                >
                    Add new post
                </button>
            </div>


        </div>


    )
}

export default Content