import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>
              <b>Description: </b>
              {post.description}
            </p>
            <p>
              Likes: {post.likeCount} | Dislikes: {post.dislikeCount}
            </p>
            <img src={post.imgUrl} alt="post" width="40%" />
            <p>Posted On: {post.createdAt}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
