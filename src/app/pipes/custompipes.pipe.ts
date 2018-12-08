import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
  //pure: false
})
export class CustompipesPipe implements PipeTransform {
  transform(ids: any, arg1?: any, arg2?: any): any {
    console.log("args : " + arg1 + " : " + arg2);
    let reverseids = [];

    for (let i = ids.length - 1; i >= 0; i--) {
      console.log("i " + i);
      reverseids.push(ids[i]);
    }

    console.log("IDS : " + ids);

    console.log("Reverse IDS : " + reverseids);

    return reverseids;
  }
}
