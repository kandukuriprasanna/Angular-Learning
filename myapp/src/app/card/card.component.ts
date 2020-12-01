import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fullname: any = "useless fellow";

  @Input() age: any;

  @Input() gender: any;

  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

  score: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  onNameClick() {
    this.score = this.score+1;
  }

  onCardSelect() {
    this.onSelect.emit(this.score);
  }
}
