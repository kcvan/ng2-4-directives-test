import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  host: {
    '(click)': 'testFunc($event)',
    '[style.backgroundColor]': 'backgroundColor'
  }
})
export class BasicHighlightDirective implements OnInit{
  backgroundColor: string = 'green';

  //look at better highlight directive for notes
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  testFunc(event: Event) {
    console.log(event);
    this.backgroundColor = 'pink';
  }
}
