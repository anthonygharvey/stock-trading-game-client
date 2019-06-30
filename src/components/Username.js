import React from "react";

export default function Username(props) {
  return (
    <div>
      <div className="ui input focus">
        <input
          type="text"
          placeholder="username"
          onChange={props.handleNameChange}
        />
      </div>
    </div>
  );
}
