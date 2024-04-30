import { Component } from "@angular/core";
import { MENU_ITEMS } from "./report-menu";

@Component({
  selector: "ngx-report",
  styleUrls: ["report.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ReportComponent {
  menu = MENU_ITEMS;
}
