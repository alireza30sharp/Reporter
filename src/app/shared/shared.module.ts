import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReportComponent } from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {
  KiButtonComponent,
  KiConfirmationComponent,
  kiModalComponent,
} from "./ki-components";
import { PrimengModule } from "./primeng/primeng.module";
import { LoadingComponent } from "./components/loading/loading.component";
const component = [
  ReportComponent,
  KiButtonComponent,
  KiConfirmationComponent,
  kiModalComponent,
  LoadingComponent,
];
@NgModule({
  declarations: [...component],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    PrimengModule,
  ],

  providers: [],
  exports: [ReactiveFormsModule, PrimengModule, ...component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }

  static forChild() {
    return {
      ngModule: SharedModule,
    };
  }
}
