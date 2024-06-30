import { Component, OnInit } from "@angular/core";
import { VariablesReportInterFace } from "../../shared/interfaces/variables-report.interface";
import { ReportService } from "../services/report.service";
import { ActivatedRoute } from "@angular/router";
import { FactorInterFace } from "../interface";
import { ContractInterface } from "../interface/contarct";
import { ModalService, ToastService } from "../../shared/services";
import { finalize } from "rxjs";
import { ConfirmInterFace } from "../../shared/ki-components/ki-confirmation/confirm.interface";
import { UserAuthService } from "../../shared/services/user-auth.service";
import { trackingCode } from "../../shared/models";
import { RejectContractFormModalCompone } from "../components/templates/reject-contract-form-modal/reject-contract-form-modal.component";
import { confirmationsDto } from "../models/confirmation";
@Component({
  selector: "ngx-confirmations",
  templateUrl: "./confirmations.component.html",
  styleUrls: ["./confirmations.component.scss"],
  providers: [ReportService],
})
export class ConfirmationsComponent implements OnInit {
  isMobile: boolean = false;
  eid: any;
  pen: string;
  dataSetName: any = "Data";
  message: string = "";
  loading: boolean = false;
  model: confirmationsDto;
  tracking = new trackingCode();
  isAccepted: boolean = false;
  constructor(
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute,
    private _toastService: ToastService,
    private _modalService: ModalService,
    readonly authSvc: UserAuthService
  ) {
    if ((window as any).isMobile) {
      this.isMobile = true;
    }
    this._activatedRoute.params.subscribe((params) => {
      this.eid = params["trackingCode"];
      this.getOnlineConfirmationsByTrackingCode(this.eid);
    });
  }
  ngOnInit(): void {}

  getOnlineConfirmationsByTrackingCode(tracking: string) {
    this.loading = true;
    this._reportService
      .getOnlineConfirmationsByTrackingCode(tracking)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((res) => {
        if (res.isOk) {
          this.model = res.data;
        } else {
          this.message = res.messages.join(" ");
        }
      });
  }
  acceptContract() {
    const params: ConfirmInterFace = {
      acceptText: "بله",
      declineText: "خیر",
      description: " آیا برای تایید مطمئن هستید ؟",
      title: "تایید " + " " + `"${this.model?.customerName.toUpperCase()}"`,
      type: "Confirm",
    };
    this._modalService.showConfirm(params, false).then((res) => {
      if (res) {
        this._reportService.acceptOnlineConfirmations(this.eid).subscribe({
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
    });
  }
  rejectContract() {
    this._modalService
      .open(
        RejectContractFormModalCompone,
        "lg",
        { trackingCode: this.eid, typePage: "confirmations" },

        true
      )
      .then((value) => {})
      .catch((err) => {});
  }
}
