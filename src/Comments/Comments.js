import React, { useState } from "react";

function CommentBox() {
  const [comments, setComments] = useState([]);

  // Function to add a new comment
  function addComment(newComment) {
    setComments([...comments, newComment]);
  }

  // Function to edit a comment
  function editComment(index, newComment) {
    const newComments = [...comments];
    newComments[index] = newComment;
    setComments(newComments);
  }

  // Function to delete a comment
  function deleteComment(index) {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  }

  // Function to reply to a comment
  function replyToComment(index, reply) {
    const newComments = [...comments];
    newComments[index].replies.push(reply);
    setComments(newComments);
  }

  return (
    <div>
      {/* Display existing comments */}
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          {/* Edit and delete buttons */}
          <button
            onClick={() => editComment(index, prompt("Enter new comment"))}
          >
            Edit
          </button>
          <button onClick={() => deleteComment(index)}>Delete</button>
          {/* Display replies */}
          {comment.replies.map((reply, replyIndex) => (
            <div key={replyIndex}>
              <p>{reply}</p>
            </div>
          ))}
          {/* Reply form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              replyToComment(index, event.target.elements.reply.value);
              event.target.elements.reply.value = "";
            }}
          >
            <input type="text" name="reply" />
            <button type="submit">Reply</button>
          </form>
        </div>
      ))}
      {/* Add comment form */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addComment({
            text: event.target.elements.comment.value,
            replies: [],
          });
          event.target.elements.comment.value = "";
        }}
      >
        <input type="text" name="comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentBox;
