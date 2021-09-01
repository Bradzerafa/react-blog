const Home = () => {

    const handleClick = (name) => {
        console.log(`Hello, ${name}`)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={(() => handleClick('Brad'))}>Click me</button>
        </div>

     );
}
 
export default Home;