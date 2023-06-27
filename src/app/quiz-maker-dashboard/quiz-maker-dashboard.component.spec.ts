import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerDashboardComponent } from './quiz-maker-dashboard.component';

describe('QuizMakerDashboardComponent', () => {
  let component: QuizMakerDashboardComponent;
  let fixture: ComponentFixture<QuizMakerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerDashboardComponent]
    });
    fixture = TestBed.createComponent(QuizMakerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
