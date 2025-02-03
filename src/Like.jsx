const Like = ({ liked, setLiked }) => {
  return (
    <button
      onClick={() => {
        setLiked((prev) => !prev);
      }}
    >
      {liked ? "좋아합니다" : "좋아하지 않습니다"}
    </button>
  );
};

export default Like;
