export interface CategoryList {
    id: number,
    name: string
}

export interface QuizQuestion {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: Array<string>,
    question: string,
    type: string,
    allOptions: Array<string>
}