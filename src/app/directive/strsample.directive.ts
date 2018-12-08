import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appStrsample]"
})
export class StrsampleDirective {
  hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

  @Input()
  set appStrsample(condition: boolean) {
    console.log("Condition @ directive :" + condition);
    if (condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewRef.clear();
      this.hasView = false;
    }
  }
}
