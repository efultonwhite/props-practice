import React from 'react'

import "./styles/Blog.css"

function Blog(props) {
    console.log(props);
    return (
        
            <div className="postContainer">
                
                <div className="post">
                    <h1>{props.title}</h1>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        
    )
}

export default Blog
