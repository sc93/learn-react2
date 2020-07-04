import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import { List } from "react-virtualized";
import "./TodoList.scss";
const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRender = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return (
        <List
            className="TodoList"
            width="493"
            height="512"
            rowCount={todos.length}
            rowHeight={56}
            rowRenderer={rowRender}
            List={todos}
            style={{ outline: "none" }}
        ></List>
    );
};

export default React.memo(TodoList);
