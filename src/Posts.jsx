// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react"
import './Posts.css'
import Post from "./Post"

export default function Posts(){


    const [posts, setPosts] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        // .catch(error = console.log(error))
    },[])

    return(
        <div className="postStyle">
            
            <h3>Posts: {posts.length} </h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}