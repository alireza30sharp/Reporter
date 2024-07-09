import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import {
  PinCodeComponent,
  ReportComponent,
  TableMobileComponent,
} from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { FlexLayoutModule } from "@angular/flex-layout";

import * as kiComponent from "./ki-components";
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
import { MaterialModule } from "./material.module";
import { ParagraphPipe } from "./pipe/paragraph";
import { separatorPipe } from "./pipe/separator";
const component = [
  ReportComponent,
  LoadingComponent,
  PinCodeComponent,
  TableMobileComponent,
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
  ParagraphPipe,
  separatorPipe,
];
@NgModule({
  declarations: [...component],
  imports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
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
    MaterialModule,
  ],

  providers: [],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
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
    MaterialModule,
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
