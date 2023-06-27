import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerDashboardComponent } from './quiz-maker-dashboard/quiz-maker-dashboard.component';

const routes: Routes = [
  {
    path: 'quizmaker',
    component: QuizMakerDashboardComponent
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
