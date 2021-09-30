import {Link} from 'react-router-dom';
function BlogDetail() {
    return(
        <div className="blog-info">
            <div className="site-container">
                <Link to="/">
                    <button className="btn">Back</button>
                </Link>
                <p>Post contact</p>
            </div>
        </div>
    )
}

export default BlogDetail;