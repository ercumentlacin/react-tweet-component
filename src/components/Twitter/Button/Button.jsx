import React, { useState } from "react";

function Button(props) {
  const [status, setStatus] = useState(0);

  const [value, setValue] = React.useState(
    Number(
      localStorage.getItem(props.id) ||
        props.children.props.children.props.children
    )
  );

  const buttonsFill = event => {
    if (status == 0) {
      console.log(status);
      setStatus(status + 1);

      console.log("yeter", status);
      (event.target.name = "i") ? setValue(value + 1) : 1001;
      console.log("ilki ", status);
    } else {
      (event.target.name = "i") ? setValue(value - 1) : 1001;
      console.log("ikincisi ", status);
      return setStatus(status - 1);
    }
  };
  localStorage.setItem(props.id, value);

  return (
    <button className={props.className} onClick={buttonsFill}>
      <i name="i" className={props.children.props.className} />
      <span className="buttons-value">{value}</span>
    </button>
  );
}

export default Button;
