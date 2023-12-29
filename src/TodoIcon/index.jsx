import { TiTimesOutline as Delete } from "react-icons/ti";
import { TiTickOutline as Complete} from "react-icons/ti";
import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <Delete className="Icon" color={color} />,
  "delete": (color) => <Complete className="Icon" color={color} />,
};

// eslint-disable-next-line react/prop-types
function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };