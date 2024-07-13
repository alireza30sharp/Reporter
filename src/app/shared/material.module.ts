import { NgModule } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [
    A11yModule,
    CdkTableModule,
    MatBadgeModule,

    MatPaginatorModule,

    MatSortModule,
    MatTableModule,

    MatTooltipModule,

    ScrollingModule,
  ],
  exports: [
    A11yModule,

    CdkTableModule,

    MatBadgeModule,

    MatPaginatorModule,

    MatSortModule,
    MatTableModule,

    MatTooltipModule,

    ScrollingModule,
  ],
})
export class MaterialModule {}
