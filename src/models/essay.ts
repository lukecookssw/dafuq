export interface Essay {
    id: number;
    title: string;
    dateCreated: Date;
}

export const MOCK_ESSAY: Essay = {
    id: 1,
    title: 'My First Essay',
    dateCreated: new Date()
};


export const MOCK_ESSAYS: Essay[] = [
    MOCK_ESSAY,
    { ...MOCK_ESSAY, id: 2, title: 'My Second Essay' },
];