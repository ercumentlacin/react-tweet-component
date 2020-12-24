import React from "react";
import Button from "./Button/Button";
import button_list from "./Button/button_list";

class TwitterButtons extends React.Component {
  render() {
    
    return (
      <div className="activy d-flex justify-content-between">
        {button_list.map((button, key) => (
          <Button id={"Card"+key} key={key} className={button.className}>
            <i className={button.iClassName}>
              <span>{button.value}</span>
            </i>
          </Button>
        ))}
      </div>
    );
  }
}

export default TwitterButtons;
