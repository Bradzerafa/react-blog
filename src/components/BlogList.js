import {Link} from 'react-router-dom'


const BlogList = ({blogPosts, deleteBtn}) => {
    
    
    return ( 
        <div className="blog-list">
             {blogPosts.map((post) => (
                <div className="blog-preview" key={post.id} >
                <Link to={`/blogs/${post.id}`}><h2>{post.title}</h2></Link>
                <p>{post.body}</p>
                <p>Written by: {post.author}</p>
                <button onClick={() => (deleteBtn(post.id)) }>Delete Post</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList; 