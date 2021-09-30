import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
function BlogList(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://hindimanch.in/wp-json/wp/v2/posts?_embed&per_page=50")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="blog-items">
                {items.map(item => (
                    <div key={item.id} className="blog-item">
                        <div className="blog-title" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                        <div className="blog-author">
                            <em>{item["_embedded"]["author"][0]["name"]}</em>
                        </div>
                        <div className="blog-image">
                            <img src={item["_embedded"]["wp:featuredmedia"][0]["source_url"]} alt={item["_embedded"]["wp:featuredmedia"][0]["alt_text"]} />
                        </div>
                        <div className="read-more">
                            <Link to="/post">
                                <button className="btn">Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default BlogList;