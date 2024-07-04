import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  { path: "", redirectTo: "report", pathMatch: "full" },

  {
    path: "report",
    loadChildren: () =>
      import("./report/report.module").then((m) => m.ReportModule),
  },
  {
    path: "otp/:trackingCode",
    loadChildren: () => import("./idp/idp.module").then((m) => m.IdpModule),
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
