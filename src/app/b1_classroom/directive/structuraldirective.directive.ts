import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appShow]"
})
export class StructuraldirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

  @Input()
  set appShow(show: string) {
    console.log("Show : " + show);
    if (show == "display") {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }
}
