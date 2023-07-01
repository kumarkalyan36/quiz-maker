import { Component, OnInit, SecurityContext } from '@angular/core';
import { MainService } from '../services/main.service';
import { tap, takeUntil, Subject } from 'rxjs';
import { CategoryList, QuizCategoryResponse, QuizQuestion, QuizQuestionResponse } from '../types/quiz-maker-type';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-maker-dashboard',
  templateUrl: './quiz-maker-dashboard.component.html',
  styleUrls: ['./quiz-maker-dashboard.component.css']
})
export class QuizMakerDashboardComponent implements OnInit {
  categoriesData: Array<CategoryList> = [];
  selectedCategory: string = '';
  selectedDifficulty: string = '';
  quizQuestions: Array<QuizQuestion> = [];
  selectedOption: Array<string> = [];
  isSubmit: boolean = false;
  loader: boolean = false;
  public destroyed: Subject<boolean> = new Subject();
  constructor(private mainService: MainService,
              private router: Router,
              private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.mainService.getCategories().subscribe((res) => {
      const data = <QuizCategoryResponse> res;
      this.categoriesData = data.trivia_categories;
    });
  }

  createQuiz() {
    this.isSubmit = true;
    if(this.selectedCategory !='' && this.selectedDifficulty != '') {
      this.loader = true;
      const url = 'https://opentdb.com/api.php?amount=5&category=' + this.selectedCategory + '&difficulty=' + this.selectedDifficulty + '&type=multiple';
      this.mainService.createQuiz(url).subscribe((res) => {
        this.isSubmit = false;
        this.loader = false;
        const data = <QuizQuestionResponse>res;
        this.quizQuestions = data.results;
        this.quizQuestions.map((obj) => {
          obj['allOptions'] = this.shuffleArray([...obj.incorrect_answers, ...[obj.correct_answer]]);
        });
        this.selectedOption = [];
      });
    }
  }

  returnSafeHtml(convertString: string) {
    return this.sanitizer.bypassSecurityTrustHtml(convertString);
  }

  shuffleArray(arr: Array<string>) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  submit() {
    this.mainService.setQuizMakerResults(this.quizQuestions, this.selectedOption);
    this.router.navigate(['/quizresults']);
  }

  checkOptionSelection() {
    if (Object.keys(this.selectedOption).length === 5) {
      return true;
    }
    return false;
  }

}
