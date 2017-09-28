import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //we use custom property binding to let the user set the colors they want on the directive in the template
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //if we wanted to do something things like just change the background, we can use hostBinding.
  //the parameter we pass in is a native proterty on the element(style), and then we access the background color.
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  //private means it will not be available outside this component and in the template
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this should be the way you access DOM elements, with renderer2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  //reacting to a native event on the element the directive is on
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.highlight('blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.highlight('transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

  //doing it like this is better practice, rather than writing out this.renderer twice in each host listener
  // private highlight(color: string) {
  //   console.log(color);
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  // }
}
