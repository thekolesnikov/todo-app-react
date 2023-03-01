import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../types/types';

const initialState: ITodo[] = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITodo>) {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                status: action.payload.status,
            });
        },
        changeStatus(state, action: PayloadAction<number>) {
            const filterArr = state.filter(
                (todo) => todo.id === action.payload
            );
            filterArr[0].status = !filterArr[0].status;
        },
    },
});

export default todoSlice.reducer;
