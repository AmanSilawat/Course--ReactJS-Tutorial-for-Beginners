import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingPostButton(params) {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idButton, setIdButton] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
            .then((post_data) => {
                console.log(post_data)
                setPost(post_data.data)
            })
            .catch((err) => console.log(err));
        
    }, [idButton]);

    return (
        <div>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <button onClick={() => setIdButton(id)}>Fetch</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingPostButton;