import { updateTodoText } from "../actions";

const updateContext = (todoId, updateTodo) => {
    return async (dispatch) => {
        const response = await fetch(
            `https://lws-server-assignment.herokuapp.com/todos/${todoId}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    text: updateTodo,
                }),
            }
        );
        const todo = await response.json();
        dispatch(updateTodoText(todoId, updateTodo));
    };
};

export default updateContext;
