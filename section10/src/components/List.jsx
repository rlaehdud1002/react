import "./List.css";
import TodoItem from "./TodoItem";

import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      // 소문자 대문자 관계없이 검색하기위해 toLowerCase 메서드 사용
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // 의존성 배열 : deps
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notdone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
