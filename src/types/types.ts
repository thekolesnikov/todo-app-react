export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export interface TaskProps {
    id: number;
    title: string;
    description: string;
    status: boolean;
    setModalActive: (modalActive: number) => void;
}
