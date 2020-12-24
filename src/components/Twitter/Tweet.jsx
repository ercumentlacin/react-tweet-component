import React from "react";
import TwitterButtons from "./TwitterButtons";
import TwitterPost from "./TwitterPost";
import UserDescription from "./UserDescription";
import UserProfilePicture from "./UserProfilePicture";

function Tweet() {
  return (
    <div className="row tweet py-3">
      <UserProfilePicture />
      <div className="col-sm-10">
        <UserDescription />
        <TwitterPost />
        <TwitterButtons />
      </div>
    </div>
  );
}

export default Tweet;
