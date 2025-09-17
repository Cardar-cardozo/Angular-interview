import { Component } from '@angular/core';
import { QuestioninputComponent } from './questioninput/questioninput.component';
import { QuestionpreviewComponent } from './questionpreview/questionpreview.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestioninputComponent, QuestionpreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  previewText = '';

  updatePreview(text: string) {
    this.previewText = text;
  }
}
