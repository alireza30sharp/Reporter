import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form } from "@angular/forms";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { rejectedDto } from "../../../../report/models";
import { SelectOptionInterface } from "../../../../shared/interfaces/select-option.interface";
import { ClientPrerequisitsService } from "../../../../report/services/client-prerequisits";
export const genderList = [
  { label: "اشتباه بودن ادرس", value: 1 },
  { label: "جمع مبلغ اشتباه است", value: 2 },
];
@Component({
  selector: "app-reject-contract-form",
  templateUrl: "./reject-contract-form.component.html",
  styleUrls: ["./reject-contract-form.component.scss"],
})
export class RejectContractFormComponent implements OnInit {
  @Input() submitButtonId?: string = "submit-button-employes-benefit";
  @Input() model: rejectedDto = new rejectedDto();
  @Output() submitCallback = new EventEmitter<rejectedDto>();
  persianBirthDate: NgbDateStruct;
  genderOptions: SelectOptionInterface<number>[] = [];
  rejectedList = [];
  lockupsIsLoading: boolean = false;
  setFocusItem: boolean = false;
  constructor(private _clientPrerequisitsService: ClientPrerequisitsService) {}
  ngOnInit(): void {
    //this.loadOption();
    this.genderOptions = genderList;
  }
  loadOption() {
    this._clientPrerequisitsService.getClientPrerequisits().subscribe({
      next: (res) => {
        debugger;
        if (res.isOk && res.data) {
          this.genderOptions = res.data
            .find((f) => f.cacheKey == "contract-Reject-reason")
            .cacheData.map((item) => ({
              label: item.workShopName,
              value: item.id,
              isDefault: item.isDefault,
            }));
        }
      },
    });
  }
  submitHandler(companyForm: any) {
    this.model.comment = this.rejectedList.toString();
    this.submitCallback.emit(this.model);
    this.setFocusItem = Object.assign({}, true);
    this.model = new rejectedDto();
  }
}
