import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchData() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const data = await axios.get('http://localhost:3000/hello')
      console.log('data: ', data)
      setPosts(data.data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      Sample React App
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default FetchData;