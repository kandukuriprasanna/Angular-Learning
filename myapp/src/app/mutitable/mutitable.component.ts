import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutitable',
  templateUrl: './mutitable.component.html',
  styleUrls: ['./mutitable.component.css']
})
export class MutitableComponent implements OnInit {

  @Input() inNumber: number;

  constructor() {
    this.inNumber = 10;
  }

  ngOnInit(): void {
  }

}
