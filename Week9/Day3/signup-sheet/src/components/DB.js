import React from "react";
import './DB.css'

function DB (props) {
  const { userInfo } = props

  return (
    <div>
      <h1>DB</h1>
      <ul>
        {userInfo?.map((users) => (
          <li>{users}</li>
        ))}
      </ul>
    </div>
  );
}

export default DB;
