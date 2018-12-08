import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gender"
})
export class GenderPipe implements PipeTransform {
  transform(name: string, args?: any, mstatus?: any): any {
    if (!args) return "Mr. " + name;

    if (args == "male") {
      return "Mr." + name;
    } else if (args == "female") {
      let rtype = mstatus == "married" ? "Mrs." : "Ms.";
      return rtype + name;
    } else {
      return "Error : Invalid Gender Type ";
    }
  }
}
