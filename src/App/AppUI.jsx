/* eslint-disable react/prop-types */
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSerch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';


function AppUI() {
  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      //setOpenModal,
  } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter />
          <TodoSearch />

            <TodoList>
            {loading && <p>Estamos cargango...</p>}
            {error && <p>Hubo un error</p>}
            {(!loading && searchedTodos.length ==0) && <p>Crea tu prmer TODO!!</p>}

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
          
          {openModal &&(
            <Modal> 
            La funcionalidad de agregar TODO
            </Modal>
          )}
        </>
      );
}

export { AppUI };