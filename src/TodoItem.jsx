/* eslint-disable react/prop-types */
import "./TodoItem.css";
import { TiTimesOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";

function TodoItem(props) {
    return (
      <li className="TodoItem" >
        <TiTickOutline className={`Icon Icon-check
        ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
           />
        <p className={`TodoItem-p
        ${props.completed && "TodoItem-p--complete"}`}
        >
        {props.text}
        </p>
        <TiTimesOutline className="Icon Icon-delete"
        onClick={props.onDelete}/>
      </li>
    );
  }
  export {TodoItem};