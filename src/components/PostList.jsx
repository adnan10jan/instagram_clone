import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  incrementShares,
  toggleSave,
  addPost,
} from "../actions/postActions";
import "../components/Css/SignUp.css";
import imag1 from "../components/images/doc_1.jpg";
import imag2 from "../components/images/doc_2.jpg";
import imag3 from "../components/images/doc_3.jpg";
import imag4 from "../components/images/doc_4.jpg";
import imag5 from "../components/images/doc_5.jpg";
const PostList = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  // Simulated default data
  const defaultPosts = [
    {
      id: 1,
      image: { name: imag1 }, // Replace with actual image URL or path
      caption: "First post",
      comments: ["Comment 1", "Comment 2", "Comment 3"],
      shares: 10,
      saved: false,
    },
    {
      id: 2,
      image: { name: imag2 },
      caption: "Second post",
      comments: ["Comment A", "Comment B", "Comment C"],
      shares: 5,
      saved: true,
    },
    // {
    //   id: 3,
    //   image: { name: imag3 },
    //   caption: "Third post",
    //   comments: ["Awesome!", "Great post", "Love it"],
    //   shares: 20,
    //   saved: false,
    // },
    // {
    //   id: 4,
    //   image: { name: imag4 },
    //   caption: "Fourth post",
    //   comments: ["Nice pic", "Keep it up", "Fantastic"],
    //   shares: 8,
    //   saved: true,
    // },
  ];

  useEffect(() => {
    // Dispatch default posts on initial load
    defaultPosts.forEach((post) => dispatch(addPost(post)));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  const handleComment = (postId, comment) => {
    dispatch(addComment(postId, comment));
  };

  const handleShare = (postId) => {
    dispatch(incrementShares(postId));
  };

  const handleSave = (postId) => {
    dispatch(toggleSave(postId));
  };

  return (
    <div className="post__list__show">
      <h2>Post List</h2>
      <div className="file__pic__align">
        {posts.map((post, index) => (
          <div key={index}>
            {/* Display the image if present */}
            {post.image && (
              <img
                src={post.image.name} // Replace with actual image URL or path
                alt="Post"
                style={{ width: "300px", height: "200px" }}
              />
            )}

            <p>{post.caption}</p>
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="button__cs__form">
              <button onClick={() => handleComment(post.id, comment)}>
                Comment
              </button>
              <button onClick={() => handleShare(post.id)}>Share</button>
              <button onClick={() => handleSave(post.id)}>
                {post.saved ? "Unsave" : "Save"}
              </button>
            </div>
            <ul>
              {post.comments.map((comment, idx) => (
                <li key={idx}>{comment}</li>
              ))}
            </ul>
            <p>Shares: {post.shares}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
