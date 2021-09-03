import {useState, useEffect} from 'react';
import BlogList from './components/BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new blog post', body: 'This is my first blog post', author: 'Brad', id: 1},
        {title: 'I got this working', body: 'I cant believe i got this working', author: 'Brad', id: 2},
        {title: 'Great work', body: 'Amazing work getting this working', author: 'Brad', id: 3}
    ])

    function deletePost(id){
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    useEffect(() => {
        console.log("useEffect")
    }, [blogs])


    return ( 
        <div className="home">
           <BlogList blogPosts={blogs} deleteBtn={deletePost} />
        </div>

     );
}
 
export default Home;