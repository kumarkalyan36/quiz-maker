import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizMakerDashboardComponent } from './quiz-maker-dashboard/quiz-maker-dashboard.component';
import { MainService } from './services/main.service';
import { QuizMakerResultsComponent } from './quiz-maker-results/quiz-maker-results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizMakerDashboardComponent,
    QuizMakerResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
