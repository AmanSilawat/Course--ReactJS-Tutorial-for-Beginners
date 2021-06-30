import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingPost(params) {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((post_data) => {
                console.log(post_data)
                setPost(post_data.data)
            })
            .catch((err) => console.log(err));
        
    }, [id]);

    return (
        <div>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingPost;