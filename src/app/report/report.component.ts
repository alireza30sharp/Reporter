import { Component } from "@angular/core";
import { MENU_ITEMS } from "./report-menu";

@Component({
  selector: "ngx-report",
  styleUrls: ["report.component.scss"],
  template: `
    <ng-container *ngIf="!isMobile; else mobileTem">
      <ngx-one-column-layout>
        <nb-menu [items]="menu"></nb-menu>
        <router-outlet></router-outlet>
      </ngx-one-column-layout>
    </ng-container>
    <ng-template #mobileTem>
      <layout-mobile>
        <router-outlet></router-outlet>
      </layout-mobile>
    </ng-template>
  `,
})
export class ReportComponent {
  isMobile: boolean = false;
  constructor() {
    if ((window as any).isMobile) {
      this.isMobile = true;
    }
  }
  menu = MENU_ITEMS;
}
