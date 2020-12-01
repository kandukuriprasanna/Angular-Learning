import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInput = 10;
  selectedCardScore = 0;

  onCardSelected(score: number ): void {
    this.selectedCardScore = score;
  }
}
