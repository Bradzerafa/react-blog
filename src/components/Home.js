import BlogList from './BlogList'
import useFetch from './useFetch';
import UseFetch from './useFetch';

const Home = () => {
  
    function deletePost(id){
        // const newBlogs = blogs.filter(blog => blog.id !== id);
        // setBlogs(newBlogs);
        console.log('Deleted')
    }

    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {/* The blogs && is conditional templating */}
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>Sorry, there was an error fetching the data. Please refresh</h3>}
            {data &&  <BlogList blogPosts={data} deleteBtn={deletePost}/>}
        </div>

     );
}
 
export default Home;