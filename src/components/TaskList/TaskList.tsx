import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { todoSlice } from '../../redux/slices/todoSlice';
import Task from '../Task/Task';

const TaskList: FC = () => {
    //Redux
    const dispatch = useDispatch();
    const { changeStatus } = todoSlice.actions;
    const todos = useAppSelector((state) => state.todos);

    //State
    const [modalActive, setModalActive] = useState(0);

    return (
        <div>
            <div className="tasklist_header">
                <div className="tasklist_header_title">ID</div>
                <div className="tasklist_header_title">TITLE</div>
                <div className="tasklist_header_title">DESCRIPTION</div>
                <div className="tasklist_header_title">STATUS</div>
            </div>
            {todos.length > 0 &&
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="task"
                        onClick={() => setModalActive(todo.id)}
                    >
                        <div className="task_title">{todo.id}</div>
                        <div className="task_title">{todo.title}</div>
                        <div className="task_title">{todo.description}</div>
                        <div className="task_title">
                            <input
                                type="checkbox"
                                checked={todo.status}
                                onClick={(e) => e.stopPropagation()}
                                onChange={() => {
                                    dispatch(changeStatus(todo.id));
                                }}
                            />
                        </div>
                    </div>
                ))}
            {modalActive > 0 && (
                <Task
                    id={todos[modalActive - 1].id}
                    title={todos[modalActive - 1].title}
                    description={todos[modalActive - 1].description}
                    status={true}
                    setModalActive={setModalActive}
                />
            )}
        </div>
    );
};

export default TaskList;
