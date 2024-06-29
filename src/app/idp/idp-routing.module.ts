import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { OtpCodeComponent } from "./pages/otp/otp-code.component";
const routes: Routes = [
  {
    path: "",
    component: OtpCodeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdpRoutingModule {}
