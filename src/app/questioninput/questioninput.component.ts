import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questioninput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questioninput.component.html',
  styleUrl: './questioninput.component.scss',
})
export class QuestioninputComponent {
  questionText = '';

  examplePlaceholder = '{{option1 | option2}}';

  @Output() preview = new EventEmitter<string>();

  onPreview() {
    this.preview.emit(this.questionText);
  }
}
