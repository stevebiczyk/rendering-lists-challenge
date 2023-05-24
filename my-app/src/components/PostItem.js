import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    return props.savedPosts.map(post => {
        const { id, title, name, image, description } = post;
        return (
            <div className={css.SearchItem} key={title}>
                <p>Title: {title}</p>
                <p>Artist: {name}</p>
                <img src={image} alt={title} />
                <p>Description: {description}</p>
            </div>
        );
    });
}

export default PostItem;