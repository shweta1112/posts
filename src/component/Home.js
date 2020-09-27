import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { addLikeAction, addDislikeAction } from "../redux/actions/Actions";
import "../App.css";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ PostsData }) => PostsData.posts);

  const onLike = (id) => {
    console.log(id);
    dispatch(addLikeAction(id));
  };

  const onDislike = (id) => {
    console.log(id);
    dispatch(addDislikeAction(id));
  };

  return (
    <div className="home-wrapper">
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} handleLike={onLike} handleDislike={onDislike} />
        </div>
      ))}
    </div>
  );
};

export default Home;
