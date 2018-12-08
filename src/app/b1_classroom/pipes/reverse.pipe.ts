import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
  pure : false
})
export class ReversePipe implements PipeTransform {
  transform(src: any, args?: any) {
    let reverseArray = [];

    for (let i = src.length - 1; i >= 0; i--) {
      reverseArray.push(src[i]);
    }

    return reverseArray;
  }
}
