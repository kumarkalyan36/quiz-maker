import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizQuestion } from '../types/quiz-maker-type';

const headerOptions: any = new Headers();

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public quizQuestions: Array<QuizQuestion> = [];
  public quizAnswersSubmitted: Array<string> = [];
  constructor(private http: HttpClient) { }

  getCategories() {
    const apiUrl = 'https://opentdb.com/api_category.php';
    return this.http.get(apiUrl);
  }

  createQuiz(apiUrl: string) {
    return this.http.get(apiUrl);
  }

  setQuizMakerResults(quizQues: Array<QuizQuestion>, quizSubmittedAnswers: Array<string>) {
    this.quizQuestions = quizQues;
    this.quizAnswersSubmitted = quizSubmittedAnswers;
  }

  getCreatedQuizQuestions() {
    return this.quizQuestions;
  }

  getQuizSubmittedAnswers() {
    return this.quizAnswersSubmitted;
  }

}
