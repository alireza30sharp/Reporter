import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { FactorComponent } from "./factor/factor.component";
import { ContractComponent } from "./contract/contract.component";
import { AdminAuthGuard } from "./services/admin-auth.guard";
import { ConfirmationsComponent } from "./confirmations/confirmations.component";

const routes: Routes = [
  {
    path: "",
    component: ReportComponent,
    children: [
      {
        path: "factor/:eid",
        component: FactorComponent,
      },
      {
        path: "contract/:trackingCode",
        component: ContractComponent,
        //canActivate: [AdminAuthGuard],
      },
      {
        path: "confirmations/:trackingCode",
        component: ConfirmationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
