import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-questionpreview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionpreview.component.html',
  styleUrl: './questionpreview.component.scss',
})
export class QuestionpreviewComponent {
  @Input() questionText = '';

  parsedElements: (string | string[])[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questionText']) {
      this.parseQuestionText();
    }
  }

  isOptionArray(part: string | string[]): part is string[] {
    return Array.isArray(part);
  }

  private parseQuestionText(): void {
    this.parsedElements = [];

    const regex = /\{\{(.*?)\}\}/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(this.questionText)) !== null) {
      const index = match.index;

      // Push static text before this match
      if (index > lastIndex) {
        this.parsedElements.push(this.questionText.slice(lastIndex, index));
      }

      // Extract options
      const options = match[1].split('|').map((o) => o.trim());
      this.parsedElements.push(options);

      lastIndex = regex.lastIndex;
    }

    // Push any remaining text after the last match
    if (lastIndex < this.questionText.length) {
      this.parsedElements.push(this.questionText.slice(lastIndex));
    }
  }
}
