import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `<h2>{{title}}</h2>
            <img [src]="imageUrl" width="300" height="200"/>`
})
export class CoursesComponent {
title="Lists of courses";
imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smile-quotes-1518106970.jpg";
  constructor() { }

}
