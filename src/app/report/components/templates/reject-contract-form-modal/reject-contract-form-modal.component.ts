import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../../../../shared/services";
import { finalize } from "rxjs/operators";
import { rejectedDto } from "../../../../report/models";
import { ReportService } from "../../../services/report.service";

@Component({
  selector: "app-reject-contract-form-modal",
  templateUrl: "./reject-contract-form-modal.component.html",
  styleUrls: ["./reject-contract-form-modal.component.scss"],
  providers: [ReportService],
})
export class RejectContractFormModalCompone implements OnInit {
  @Input() initialData?: rejectedDto = new rejectedDto();
  @Input() trackingCode: string;
  readonly submitButtonId: string = "submit-button-employes";
  isLoading?: boolean = false;
  isLoadingSaveChange?: boolean = false;
  constructor(
    private _activeModal: NgbActiveModal,
    private _toastService: ToastService,
    private _reportService: ReportService
  ) {}
  ngOnInit(): void {}
  saveHandler(data: rejectedDto) {
    data.trackingCode = this.trackingCode;
    this.isLoadingSaveChange = true;
    if (this.isLoading) {
      return;
    } else {
      this._reportService
        .rejectContract(data as any)
        .pipe(
          finalize(() => {
            this.isLoadingSaveChange = false;
            this.cancelHandler();
          })
        )
        .subscribe({
          next: (res) => {
            if (res.isOk) {
              this._toastService.success(res.data.message);
            }
          },
          error: (err) => {
            let msg = "";
            if (err.error.messages) {
              this._toastService.error(err.error.messages);
              msg = err.error.messages.join(" ");
            } else if (err.error.message) {
              this._toastService.error(err.error.message);
              msg = err.error.message.join(" ");
            }
          },
        });
    }
  }
  cancelHandler() {
    this._activeModal.close(false);
  }
}
