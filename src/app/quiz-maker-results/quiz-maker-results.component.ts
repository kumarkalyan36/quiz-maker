import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { QuizQuestion } from '../types/quiz-maker-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-maker-results',
  templateUrl: './quiz-maker-results.component.html',
  styleUrls: ['./quiz-maker-results.component.css']
})
export class QuizMakerResultsComponent implements OnInit{
    createdQuizQues: Array<QuizQuestion> = [];
    submittedAnswers: Array<string> = [];
    constructor(private mainService: MainService,
                private router: Router
    ) {
    }

    ngOnInit(): void {
      this.createdQuizQues = this.mainService.getCreatedQuizQuestions();
      this.submittedAnswers = this.mainService.getQuizSubmittedAnswers();
    }

    getCorrectAnswersCount() {
      let count = 0;
      this.createdQuizQues.forEach((element, index) => {
        if (this.submittedAnswers[index] === element.correct_answer) {
          count++;
        }
      });
      return count;
    }

    navToCreateQuiz() {
      this.router.navigate(['/quizdashboard']);
    }
}
