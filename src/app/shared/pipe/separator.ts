import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "separator",
})
export class separatorPipe implements PipeTransform {
  transform(value: number): string {
    if (value) {
      return value.toLocaleString("fa-IR");
    } else return "0";
  }
}
