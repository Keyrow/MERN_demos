import React, { useState } from "react";

const ProfilePreview = (props) => {
  // initialize likeCount state since it is something that can change
  // initial value will be the value that was passed in with props
  const [likeCnt, setLikeCnt] = useState(props.likeCount);

  const handleLike = (event) => {
    // this only updates the likeCnt state var inside this component
    // does not update the likeCount key in the app.js profileData array
    setLikeCnt(likeCnt + 1);
  };

  const getHearts = () => {
    const jsxHearts = [];

    // can't use .map because .map needs to be called on an array
    // and we don't have an existing array, just a count
    for (let i = 0; i < likeCnt; i++) {
      jsxHearts.push(<span className="heart-icon">&#x2764;</span>);
    }
    return jsxHearts;
  };

  const getSpecialIcon = () => {
    if (likeCnt >= 10) {
      return (
        <img
          className="fire-icon"
          src="https://i.pinimg.com/originals/55/cc/c8/55ccc8c4c2937937909b066b81e9da59.png
          "
          alt="hot"
        />
      );
    }
  };

  return (
    <div>
      {/* avoiding a ternary to conditionally display the fire emoji by using a helper function instead */}
      {/* <h3>
        Username: {props.username} {getSpecialIcon()}
      </h3> */}
      {/* using a ternary to conditionally display the fire emoji */}
      <h3>
        Username: {props.username}{" "}
        {likeCnt >= 10 ? (
          <img
            className="fire-icon"
            src="https://i.pinimg.com/originals/55/cc/c8/55ccc8c4c2937937909b066b81e9da59.png
          "
            alt="hot"
          />
        ) : (
          ""
        )}
      </h3>
      <img className="thumbnail" src={props.thumbnailUrl} alt="thumbnail" />
      <button onClick={handleLike}>Like ({likeCnt})</button> {getHearts()}
    </div>
  );
};

export default ProfilePreview;
