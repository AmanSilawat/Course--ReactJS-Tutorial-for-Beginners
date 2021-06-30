import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(params) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((post_data) => {
                console.log(post_data)
                setPosts(post_data.data)
            })
            .catch((err) => console.log(err));
        
    }, []);

    return (
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    )
}

export default DataFetching;