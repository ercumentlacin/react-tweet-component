import React from "react";

function TwitterPost() {
  return (
    <div className="user-post">
      <p>
        Remove matching{" "}
        <a className="text-primary" href="#">
          #object
        </a>{" "}
        from{" "}
        <a className="text-primary" href="#">
          #javascript
        </a>{" "}
        <a className="text-primary" href="#">
          #array
        </a>
      </p>
      <img
        className="w-100"
        src="https://pbs.twimg.com/media/Ep0qiq2XYAEqtQo?format=jpg&name=small"
        alt="javascript tips"
      />
    </div>
  );
}

export default TwitterPost;
