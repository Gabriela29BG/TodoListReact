/* eslint-disable react/prop-types */
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    // eslint-disable-next-line react/prop-types
    completedTodos,
    // eslint-disable-next-line react/prop-types
    totalTodos,
    // eslint-disable-next-line react/prop-types
    searchValue,
    // eslint-disable-next-line react/prop-types
    setSearchValue,
    // eslint-disable-next-line react/prop-types
    searchedTodos,
    // eslint-disable-next-line react/prop-types
    completeTodo,
    // eslint-disable-next-line react/prop-types
    deleteTodo,

}) {
    return (
        <>
          <TodoCounter
           completed={completedTodos}
           total={totalTodos} 
           />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
          {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
         />
            ))}
          </TodoList>

          <CreateTodoButton />
        </>
      );
}

export { AppUI };