import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    return props.savedPosts.map(post => (
        <div key={post.id} className={css.SearchItem}>
            <p>Title: {post.title}</p>
            <p>Artist: {post.name}</p>
            <img src={post.image} />
            <p>Description: {post.description}</p>
        </div>
    ));
}

export default PostItem;