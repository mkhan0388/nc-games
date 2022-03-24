import { useState } from "react";
import { likeCommentById } from "../utils/api";

const CommentButton = ({ votes, comment_id }) => {
  const [vote, setVote] = useState("💙");
  const [disable, setDisable] = useState(false);
  return (
    <div>
      <button
        disabled={disable}
        key={comment_id}
        className="like_delete"
        onClick={() => {
          const id = comment_id;
          setVote((currCount) => currCount + 1);
          likeCommentById(id).then((res) => {
            setVote(res);
            setDisable(true);
          });
        }}
      >
        {vote}
      </button>
    </div>
  );
};

export default CommentButton;
