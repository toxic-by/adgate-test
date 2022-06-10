import React, { useState, useEffect } from "react";
import "./news.css";
const News = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);
    console.log(posts);
    return (
        <div className="posts-wrapper">
            {posts.length
                ? posts.map((item) => {
                      return (
                          <div key={item.id} className="posts-single">
                              <div className="posts-single__title"> {item.title}</div>
                              <div> {item.body}</div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};

export default News;
