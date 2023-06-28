import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerDashboardComponent } from './quiz-maker-dashboard/quiz-maker-dashboard.component';
import { QuizMakerResultsComponent } from './quiz-maker-results/quiz-maker-results.component';

const routes: Routes = [
  {
    path: 'quizmaker',
    component: QuizMakerDashboardComponent
  },
  {
    path: 'quizresults',
    component: QuizMakerResultsComponent
  },
  {
    path: '**',
    redirectTo: 'quizmaker'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
