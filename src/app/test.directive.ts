import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appTest]"
})
export class TestDirective {
  Element: ElementRef;

  constructor(Element: ElementRef) {
    console.log(Element);

    this.Element = Element;

    // Element.nativeElement.innerText = "Test directive called";

    //Element.nativeElement.style.backgroundColor = "yellow";
  }

  // @HostListener("mouseneter")
  // onMouseEnter() {
  //   console.log("mouseenter");
  //   this.highlight("red");
  // }

  // @HostListener("mouseleave")
  // onMouseLeave() {
  //   this.highlight("null");
  // }

  // private highlight(color: string) {
  //   this.Element.nativeElement.style.backgroundColor = color;
  // }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log("test");
    this.highlight("red");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.Element.nativeElement.style.backgroundColor = color;
  }
}
