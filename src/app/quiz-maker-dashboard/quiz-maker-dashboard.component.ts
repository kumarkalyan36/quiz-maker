import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { tap, takeUntil, Subject } from 'rxjs';
import { CategoryList } from '../types/quiz-maker-type';

@Component({
  selector: 'app-quiz-maker-dashboard',
  templateUrl: './quiz-maker-dashboard.component.html',
  styleUrls: ['./quiz-maker-dashboard.component.css']
})
export class QuizMakerDashboardComponent implements OnInit {
  categoriesData: Array<CategoryList> = [];
  public destroyed: Subject<boolean> = new Subject();
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.mainService.getCategories().pipe(tap((data: any) => {
      this.categoriesData = data.trivia_categories;
    }), takeUntil(this.destroyed)).subscribe();
  }

}
