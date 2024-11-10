import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizJoinComponent } from './quiz-join.component';

describe('QuizJoinComponent', () => {
  let component: QuizJoinComponent;
  let fixture: ComponentFixture<QuizJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
