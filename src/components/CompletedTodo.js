import { useState } from "react";
import { useDispatch } from "react-redux";
import saveIcon from "../assets/images/save.svg";
import updateContext from "../redux/todos/thunk/contextChange";
import updateStatus from "../redux/todos/thunk/updateStatus";

export default function CompletedTodo({ todo }) {
    const { text, id, completed } = todo;
    const [context, setContext] = useState(text);
    const [openForEdit, setOpenForEdit] = useState(false);
    const dispatch = useDispatch();

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleContextChange = () => {
        setOpenForEdit(false);
        dispatch(updateContext(id, context));
    };

    return (
        <div className="flex flex-none justify-start  items-center hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed &&
                    "border-green-500 focus-within:border-green-500"
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>
            {/*OnEdit will show*/}
            {openForEdit && (
                <div className="grow flex justify-center items-center">
                    <input
                        type="text"
                        className="w-full p-2 h-full outline-none"
                        placeholder="Edit your task"
                        onChange={(e) => setContext(e.target.value)}
                    />

                    <div className="mx-6" onClick={handleContextChange}>
                        <img src={saveIcon} className="w-4" alt="" />
                    </div>
                </div>
            )}
            {!openForEdit && (
                <div
                    className={`select-none flex p-2 justify-between flex-1 ${
                        completed && "line-through"
                    }`}
                >
                    {context}
                    <div
                        className="mx-6 cursor-pointer"
                        onClick={() => setOpenForEdit(!openForEdit)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}
