import './TodoCounter.css';

// eslint-disable-next-line react/prop-types
function TodoCounter({ total, completed}) {
    return (
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> to do
      </h1>
    );
  }
  export {TodoCounter};