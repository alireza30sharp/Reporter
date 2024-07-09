import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { ReportComponent } from "./report.component";
import { ReportRoutingModule } from "./report-routing.module";
import { FactorComponent } from "./factor/factor.component";
import { SharedModule } from "../shared/shared.module";
import { ContractComponent } from "./contract/contract.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RejectContractFormComponent } from "./components/organisms";
import { RejectContractFormModalCompone } from "./components/templates/reject-contract-form-modal/reject-contract-form-modal.component";
import { ConfirmationsComponent } from "./confirmations/confirmations.component";
import { Router } from "@angular/router";
import { ContractMobileComponent } from "./contract/contract-mobile/contract-mobile.component";
import { HideHeaderDirective } from "./pipe/hide-header.directive";
import { ParallaxDirective } from "./pipe/parallax.directive";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportRoutingModule,
    ThemeModule,
    NbMenuModule,
    SharedModule.forChild(),
    IonicModule, 
  ],
  declarations: [
    ReportComponent,
    FactorComponent,
    ContractComponent,
    ContractMobileComponent,
    ConfirmationsComponent,
    RejectContractFormComponent,
    RejectContractFormModalCompone,
    HideHeaderDirective,
    ParallaxDirective
  ],
})
export class ReportModule {}
