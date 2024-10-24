import React, { useState } from 'react';
import './Comment.css'
const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(''); // Xóa giá trị trong textarea sau khi thêm
    }
  };

  return (
    <div className="comment-box">
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            {comment}
          </div>
        ))}
      </div>
      <div className="comment-input">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a message here"
        ></textarea>
        <button  className="comment-button"onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentBox;