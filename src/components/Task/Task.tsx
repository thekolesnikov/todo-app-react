import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { todoSlice } from '../../redux/slices/todoSlice';
import { TaskProps } from '../../types/types';

const Task: FC<TaskProps> = ({
    id,
    title,
    description,
    status,
    setModalActive,
}) => {
    const dispatch = useDispatch();
    const { changeStatus } = todoSlice.actions;

    const todos = useAppSelector((state) => state.todos);

    return (
        <div className="modal_wrapper">
            <div className="modal">
                <div className="modal_title">{title}</div>
                <div className="modal_description">
                    Description:
                    <br />
                    {description}
                </div>
                <div className="modal_status">
                    Status:
                    <input
                        type="checkbox"
                        checked={todos[id - 1].status}
                        onChange={() => dispatch(changeStatus(id))}
                    />
                </div>
                <button
                    className="form_button"
                    onClick={() => setModalActive(0)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Task;
