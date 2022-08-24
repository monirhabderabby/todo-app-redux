import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import CompletedTodo from "./CompletedTodo";

const CompletedTodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    console.log(todos);

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);
    return (
        <div>
            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Completed Tasks</span>
                </li>
            </ul>
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {todos
                    .filter((todo) => {
                        if (todo.completed) {
                            return todo;
                        } else {
                            return;
                        }
                    })
                    .map((todo) => (
                        <CompletedTodo todo={todo} key={todo.id} />
                    ))}
            </div>
        </div>
    );
};

export default CompletedTodoList;
