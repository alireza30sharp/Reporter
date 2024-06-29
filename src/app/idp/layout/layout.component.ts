import { ChangeDetectorRef, Component } from "@angular/core";

@Component({
  selector: "ngx-layout",
  styleUrls: ["./layout.component.scss"],
  template: ` <router-outlet></router-outlet> `,
})
export class LayoutComponent {
  constructor() {}

  // changeLanguage(lan) {
  //   this.tSvc.onChangeLang(lan);
  // }
}
