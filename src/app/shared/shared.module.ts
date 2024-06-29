import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PinCodeComponent, ReportComponent } from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";

import * as kiComponent from "./ki-components";
import { PrimengModule } from "./primeng/primeng.module";
import { LoadingComponent } from "./components/loading/loading.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";
const component = [
  ReportComponent,
  LoadingComponent,
  PinCodeComponent,
  kiComponent.KiButtonComponent,
  kiComponent.KiCheckboxComponent,
  kiComponent.KiConfirmationComponent,
  kiComponent.KiFormGroupComponent,
  kiComponent.KiInputComponent,
  kiComponent.KiSpinnerComponent,
  kiComponent.KiSwitchComponent,
  kiComponent.KiTabComponent,
  kiComponent.KiTabGroupComponent,
  kiComponent.kiSelectComponent,
  kiComponent.kiModalComponent,
  kiComponent.UiTileComponent,
  kiComponent.KiValidationComponent,
  kiComponent.KiTextareaComponent,
];
@NgModule({
  declarations: [...component],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    PrimengModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NgSelectModule,
  ],

  providers: [],
  exports: [
    ReactiveFormsModule,
    PrimengModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NgSelectModule,
    ...component,
  ],
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
