import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

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

  const handleDelete = (delId) => {
    axios
      .delete("http://localhost:8000/api/posts/" + delId)
      .then((res) => {
        const filteredPosts = posts.filter((post) => {
          return post._id !== delId;
        });
        setPosts(filteredPosts);
        // setPosts(posts.filter((post) => post._id !== delId));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleLike = (post) => {
    post.likeCount++;

    // put to the same route that runs update method in controller
    axios
      .put(`http://localhost:8000/api/posts/${post._id}`, post)
      .then((res) => {
        // fetch again to get the new updated data (the increased like count), this is inefficient because only 1 post has been updated
        fetchPosts();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // could do same thing as handeLike, which is easier
  // this shows a different technique which is more efficient by avoiding another call to db but is more complicated
  const handleDislike = (id, idx) => {
    axios
      .put(`http://localhost:8000/api/posts/${id}/dislike`)
      .then((res) => {
        const updatedPosts = [...posts];
        updatedPosts[idx] = res.data;
        setPosts(updatedPosts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      {posts.map((post, idx) => {
        return (
          <div key={post._id}>
            <h2>
              <Link to={"/posts/" + post._id}>{post.title}</Link>
            </h2>
            <p>
              Categories: {post.primaryCategory}, {post.secondaryCategory}
            </p>
            <p>
              <b>Description: </b>
              {post.description}
            </p>
            <p>
              Likes: {post.likeCount} | Dislikes: {post.dislikeCount}
            </p>
            <img src={post.imgUrl} alt="post" width="40%" />
            <p>Posted On: {post.createdAt}</p>
            <Link to={`/posts/${post._id}/edit`}>Edit</Link>{" "}
            <button
              onClick={(event) => {
                handleDelete(post._id);
              }}
            >
              Delete
            </button>
            <div>
              <button
                onClick={(event) => {
                  handleLike(post);
                }}
              >
                Like ({post.likeCount})
              </button>

              <button
                onClick={(event) => {
                  handleDislike(post._id, idx);
                }}
              >
                Dislike ({post.dislikeCount})
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
