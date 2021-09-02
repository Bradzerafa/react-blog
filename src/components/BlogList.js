const BlogList = ({blogPosts}) => {


    return ( 
        <div className="blog-list">
             {blogPosts.map((post) => (
                <div className="blog-preview" key={post.id} >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Written by: {post.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;