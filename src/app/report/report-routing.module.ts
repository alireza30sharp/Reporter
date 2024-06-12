import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { FactorComponent } from "./factor/factor.component";
import { NotFoundComponent } from "../pages/miscellaneous/not-found/not-found.component";
import { FactorMainComponent } from "./factor-main/factor-main.component";

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
        path: "factor-main",
        component: FactorMainComponent,
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
