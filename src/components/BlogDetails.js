import {useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
    let post = useParams();

    const {data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${post.id}`)
    const history = useHistory();

    const handleDelete = () => {
        console.log('deleted')
        fetch(`http://localhost:8000/blogs/${post.id}`, {
            method: "DELETE"
        }).then (() => {
            console.log("Post Deleted")
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
                {isLoading && <h3>Loading...</h3>}
                {error && <h3>Sorry, there was an error fetching the data. Please refresh</h3>}
                {blog &&  (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>Delete Post</button>
                    </article>
                 ) }
        </div>
    )
}


export default BlogDetails