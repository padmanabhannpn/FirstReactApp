import React ,{useState} from "react";
import IconButton from "./IconButton";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  
//   alert(liked)

  return (
    <IconButton
      icon={liked ? "❤️" : "🤍"}
      label={liked ? "Like" : "Unlike"}
      onClick={() => setLiked(!liked)}
    />
  );
};

export default LikeButton;