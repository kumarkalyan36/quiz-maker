import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerResultsComponent } from './quiz-maker-results.component';

describe('QuizMakerResultsComponent', () => {
  let component: QuizMakerResultsComponent;
  let fixture: ComponentFixture<QuizMakerResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerResultsComponent]
    });
    fixture = TestBed.createComponent(QuizMakerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
