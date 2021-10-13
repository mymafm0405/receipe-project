import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  //   constructor(private elmenentRef: ElementRef, private renderer: Renderer2) {}
  constructor() {}

  //   ngOnInit() {
  //     this.renderer.setStyle(
  //       this.elmenentRef.nativeElement,
  //       'margin-top',
  //       '10px'
  //     );
  //     this.renderer.setStyle(this.elmenentRef.nativeElement, 'padding', '10px');
  //     this.renderer.setStyle(
  //       this.elmenentRef.nativeElement,
  //       'border-radius',
  //       '10px'
  //     );
  //   }

  //   @HostListener('mouseenter') mouseEnter() {
  //     this.renderer.setStyle(
  //       this.elmenentRef.nativeElement,
  //       'background-color',
  //       'blue'
  //     );
  //     this.renderer.setStyle(this.elmenentRef.nativeElement, 'color', 'white');
  //   }
  //   @HostListener('mouseleave') mouseLeave() {
  //     this.renderer.setStyle(
  //       this.elmenentRef.nativeElement,
  //       'background-color',
  //       'transparent'
  //     );
  //     this.renderer.setStyle(this.elmenentRef.nativeElement, 'color', 'black');
  //   }
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elmenentRef.nativeElement,
    //   'margin-top',
    //   '10px'
    // );
    // this.renderer.setStyle(this.elmenentRef.nativeElement, 'padding', '10px');
    // this.renderer.setStyle(
    //   this.elmenentRef.nativeElement,
    //   'border-radius',
    //   '10px'
    // );
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.margin') margin: string = '20px';
  @HostBinding('style.padding') padding: string = '20px';
  @HostBinding('style.borderRadius') borderRadius: string = '5px';
  @HostBinding('style.color') color: string = '#333';

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(
    //   this.elmenentRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // this.renderer.setStyle(this.elmenentRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'orange';
    this.color = 'white';
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(
    //   this.elmenentRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    // this.renderer.setStyle(this.elmenentRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.color = '#333';
  }
}
