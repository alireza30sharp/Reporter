import { Component, OnInit } from "@angular/core";
import { NbLayoutDirection, NbLayoutDirectionService } from "@nebular/theme";

@Component({
  selector: "layout-mobile",
  styleUrls: ["./layout-mobile.scss"],
  template: `
    <nb-layout windowMode>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class LayoutMobileComponent implements OnInit {
  constructor(private directionService: NbLayoutDirectionService) {}
  ngOnInit(): void {}
}
