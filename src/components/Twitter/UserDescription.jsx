import React from "react";

function UserDescription() {
  return(
    <div className="d-flex align-items-center user-description">
      <a href="#">
        Ercüment 1.96lık olan{" "}
        <img
          src="https://abs-0.twimg.com/emoji/v2/svg/1f468-200d-1f4bb.svg"
          alt="developer"
        />{" "}
        Frontend dev{" "}
      </a>
      <span className="mx-2 text-muted">@ercument196</span>
      <span className="px-2 d-flex align-items-center text-muted"> · </span>
      <time className="text-muted mx-2">23s</time>
    </div>
  );
}

export default UserDescription;
