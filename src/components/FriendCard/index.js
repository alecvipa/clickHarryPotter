import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => {props.removeFriend(props.id)}} className="remove"/>
      </div>
      <div className="content">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
