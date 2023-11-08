const Todo = ({ todo, todos, setTodos }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (todo.id === v.id)
        return { id: v.id, title: v.title, isDone: !v.isDone };
      else return v;
    });

    setTodos(newTodos);
  };

  const onClickDel = () => {
    const newTodos = todos.filter((v, i) => {
      if (todo.id !== v.id) return v;
    });

    setTodos(newTodos);
  };

  return (
    <li>
      <span>{todo.id}</span>
      <button
        className={`${todo.isDone && "line-through"}`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button onClick={onClickDel}>Del</button>
    </li>
  );
};

export default Todo;
