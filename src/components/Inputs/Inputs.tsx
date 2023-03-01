import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoSlice } from '../../redux/slices/todoSlice';
import { useAppSelector } from '../../hooks/redux';

const Inputs: FC = () => {
    //Redux
    const dispatch = useDispatch();
    const todos = useAppSelector((state) => state.todos);

    const { addTodo } = todoSlice.actions;

    //States
    const [titleValue, setTitleValue] = useState<string>('');
    const [descriptionValue, setDescriptionValue] = useState<string>('');
    const [errorTitle, setErrorTitle] = useState<boolean>(false);
    const [errorDescription, setErrorDescription] = useState<boolean>(false);

    //Handlers
    const inputTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
        setErrorTitle(false);
    };

    const inputDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescriptionValue(e.target.value);
        setErrorDescription(false);
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (titleValue.trim() && descriptionValue.trim()) {
            dispatch(
                addTodo({
                    id: todos.length + 1,
                    title: titleValue,
                    description: descriptionValue,
                    status: false,
                })
            );
            setTitleValue('');
            setDescriptionValue('');
        }
        if (!titleValue.trim()) {
            setErrorTitle(true);
        }
        if (!descriptionValue.trim()) {
            setErrorDescription(true);
        }
    };

    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="title_input">Title:</label>
                <input
                    type="text"
                    id="title_input"
                    placeholder="Enter title"
                    value={titleValue}
                    style={
                        errorTitle
                            ? { outline: 'solid red' }
                            : { outline: 'solid black' }
                    }
                    onChange={inputTitleHandler}
                />
                {errorTitle && (
                    <div className="input_error">This field is empty</div>
                )}
            </div>
            <div>
                <label htmlFor="description_input">Description:</label>
                <input
                    type="text"
                    id="description_input"
                    placeholder="Enter description"
                    value={descriptionValue}
                    style={
                        errorDescription
                            ? { outline: 'solid red' }
                            : { outline: 'solid black' }
                    }
                    onChange={inputDescriptionHandler}
                />
                {errorDescription && (
                    <div className="input_error">This field is empty</div>
                )}
            </div>
            <button className="form_button" type="submit">
                Create
            </button>
        </form>
    );
};

export default Inputs;
