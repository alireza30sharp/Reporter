import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "separator",
})
export class separatorPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString("fa-IR");
  }
}
