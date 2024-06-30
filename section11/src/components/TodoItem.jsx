import "./TodoItem.css";

import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// Higher Order Component(HOC) : 고차 컴포넌트
export default memo(TodoItem);
