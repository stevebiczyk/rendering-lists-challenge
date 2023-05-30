import React, { Component } from 'react';
import css from "./css/Content.module.css";
import axios from 'axios';
import API_KEY from '../secrets';
import { savedPosts } from '../posts.json';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        };
    }
    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = this.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input type="search" id="seachInput" placeholder="By Author" onChange={(event) => this.handleChange(event)} />
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                            <PostItem savedPosts={this.state.posts} />
                            : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content;
