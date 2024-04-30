import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReportComponent } from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
const component = [ReportComponent];
@NgModule({
  declarations: [...component],
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],

  providers: [],
  exports: [ReactiveFormsModule, ...component],
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
