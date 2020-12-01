import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTrending]'
})
export class appTrendingDirective {
  constructor(private elref: ElementRef ) {
    elref.nativeElement.style.backgroundColor = "#ff9f80";
  }
}
