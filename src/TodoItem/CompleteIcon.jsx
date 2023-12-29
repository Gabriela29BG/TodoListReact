import { TodoIcon } from '../TodoIcon';

// eslint-disable-next-line react/prop-types
function CompleteIcon({ completed, onComplete }){
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };