import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizCategoryResponse, QuizQuestion, QuizQuestionResponse } from '../types/quiz-maker-type';
import { Observable } from 'rxjs';

const headerOptions: any = new Headers();

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public quizQuestions: Array<QuizQuestion> = [];
  public quizAnswersSubmitted: Array<string> = [];
  constructor(private http: HttpClient) { }

  getCategories(): Observable<QuizCategoryResponse> {
    const apiUrl = 'https://opentdb.com/api_category.php';
    return this.http.get<QuizCategoryResponse>(apiUrl);
  }

  createQuiz(apiUrl: string): Observable<QuizQuestionResponse> {
    return this.http.get<QuizQuestionResponse>(apiUrl);
  }

  setQuizMakerResults(quizQues: Array<QuizQuestion>, quizSubmittedAnswers: Array<string>) {
    this.quizQuestions = quizQues;
    this.quizAnswersSubmitted = quizSubmittedAnswers;
  }

  getCreatedQuizQuestions(): Array<QuizQuestion> {
    return this.quizQuestions;
  }

  getQuizSubmittedAnswers(): Array<string> {
    return this.quizAnswersSubmitted;
  }

}
