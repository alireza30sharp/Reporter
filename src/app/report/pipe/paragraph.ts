import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "paragraph",
})
export class ParagraphPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    const paragraphs = value.split("\n");
    return paragraphs.map((paragraph) => `<p>${paragraph.trim()}</p>`).join("");
  }
}
