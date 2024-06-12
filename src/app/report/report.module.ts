import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { ReportComponent } from "./report.component";
import { ReportRoutingModule } from "./report-routing.module";
import { FactorComponent } from "./factor/factor.component";
import { SharedModule } from "../shared/shared.module";
import { FactorMainComponent } from "./factor-main/factor-main.component";

@NgModule({
  imports: [
    ReportRoutingModule,
    ThemeModule,
    NbMenuModule,
    SharedModule.forChild(),
  ],
  declarations: [ReportComponent, FactorComponent,FactorMainComponent],
})
export class ReportModule {}
