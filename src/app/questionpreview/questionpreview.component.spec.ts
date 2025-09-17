import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpreviewComponent } from './questionpreview.component';

describe('QuestionpreviewComponent', () => {
  let component: QuestionpreviewComponent;
  let fixture: ComponentFixture<QuestionpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionpreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
