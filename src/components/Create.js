import {useState} from 'react'


const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Brad')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        console.log(blog)
    }

    return (
        <div className="create">
            <h1>Write a new blog Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog Body</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}required></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} required >
                    <option value="Brad">Brad</option>
                    <option value="BZ">BZ</option>
                </select>
                <button>Add blog</button>
            </form>

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div> 
    )
}


export default Create;