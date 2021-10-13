import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.padding = '10px';
    this.elementRef.nativeElement.style.marginTop = '10px';
    this.elementRef.nativeElement.style.borderRadius = '10px';
  }
}
