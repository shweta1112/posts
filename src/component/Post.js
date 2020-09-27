import React from "react";
import "../App.css";

const Post = ({ post, handleLike, handleDislike }) => {
  return (
    <div className="">
      <h3>{post.title}</h3>
      <div>{post.description}</div>
      <div className="like-dislike-wrapper">
        <div className="like-box" onClick={(e) => handleLike(post.id)}>
          <div className={`like ${post.likes === 0 ? "zero" : "nonzero"}`}>
            Like
          </div>
          <div>{post.likes}</div>
        </div>
        <div className="dislike-box" onClick={(e) => handleDislike(post.id)}>
          <div
            className={`dislike ${post.dislikes === 0 ? "zero" : "nonzero"}`}
          >
            Dislike
          </div>
          <div> {post.dislikes}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
