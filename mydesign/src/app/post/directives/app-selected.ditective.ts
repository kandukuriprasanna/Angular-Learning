import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appSelected]' })
export class appSelectedDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('click')
  onMouseEnter() {
      console.log("clicked fired");
      this.el.nativeElement.style.backgroundColor = "gray";
  }
}
