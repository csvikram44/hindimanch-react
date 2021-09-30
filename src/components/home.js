import BlogList from "./blog-item";

function Home(){
    return(
        <div className="main">
            <div className="content">
                <div className="site-container">
                    <h2>Blog List - Hindi Manch</h2>
                    <BlogList />
                </div>
            </div>
        </div>
    )
}

export default Home;