import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  openStatus = false;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('click') dropdown() {
    !this.openStatus
      ? this.renderer.addClass(this.elementRef.nativeElement, 'open')
      : this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    this.openStatus = !this.openStatus;
  }
}
