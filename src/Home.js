import {useState, useEffect} from 'react';
import BlogList from './components/BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [dataError, setDataError] = useState(false)

    function deletePost(id){
        // const newBlogs = blogs.filter(blog => blog.id !== id);
        // setBlogs(newBlogs);

        console.log('Deleted')
    }

    


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           if (!res.ok){
             throw Error()  
           }
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsLoading(false)
            setDataError(false)
        })
        .catch (err => {
            console.log(err.message)
            setDataError(true)
            setIsLoading(false)
        })
    }, [])


    return ( 
        <div className="home">
            {/* The blogs && is conditional templating */}
            {isLoading && <h3>Loading...</h3>}
            {dataError && <h3>Sorry, there was an error fetching the data. Please refresh</h3>}
            {blogs &&  <BlogList blogPosts={blogs} deleteBtn={deletePost}/>}
        </div>

     );
}
 
export default Home;