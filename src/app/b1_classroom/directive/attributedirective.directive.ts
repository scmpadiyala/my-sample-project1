import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class AttributedirectiveDirective {

  @Input('appHighlight')
     highlightColor : string;

  constructor(private elementREf: ElementRef) {
    this.elementREf.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('mouseenter')
  changebgColor() {
    this.elementREf.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
