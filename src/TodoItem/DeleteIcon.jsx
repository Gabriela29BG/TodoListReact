import { TodoIcon } from '../TodoIcon'

// eslint-disable-next-line react/prop-types
function DeleteIcon({ onDelete }) {
    return (
      <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
      />
    );
  }
  
  export { DeleteIcon };