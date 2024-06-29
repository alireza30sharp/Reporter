import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { IdpRoutingModule } from "./idp-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OtpCodeComponent } from "./pages/otp/otp-code.component";
import { SharedModule } from "../shared/shared.module";
import { ThemeModule } from "../@theme/theme.module";

@NgModule({
  declarations: [LayoutComponent, OtpCodeComponent],
  imports: [
    SharedModule.forChild(),
    IdpRoutingModule,
    CommonModule,
    FormsModule,
    ThemeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IdpModule {}
