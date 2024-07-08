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
@Component({
  selector: "ngx-contract",
  templateUrl: "./contract.component.html",
  styleUrls: ["./contract.component.scss"],
  providers: [ReportService],
})
export class ContractComponent implements OnInit {
  data: FactorInterFace;
  isMobile: boolean = false;
  eid: any;
  pen: string;
  dataSetName: any = "Data";
  message: string = "";
  loading: boolean = false;
  model: ContractInterface;
  tracking = new trackingCode();
  isAccepted: boolean = false;
  totalMeghdar = 0;
  totalTotalAmount = 0;
  totalDiscountAmount = 0;
  totalValueAddedAmount = 0;
  totalnetAmountRow = 0;
  totalcomplicationsAmount = 0;
  // variablesInReport: Array<VariablesReportInterFace> = [
  //   { paramName: "NameCompony", paramValue: "صورت حساب اشکان جان" },
  // ];
  constructor(
    public _reportService: ReportService,
    public _activatedRoute: ActivatedRoute,
    public _toastService: ToastService,
    public _modalService: ModalService,
    public authSvc: UserAuthService
  ) {
    if ((window as any).isMobile) {
      this.isMobile = true;
    }
    this.authSvc.trackingCode$.subscribe((res) => {
      this.getContractByTrackingCode(res);
    });
  }
  ngOnInit(): void {}

  getContractByTrackingCode(tracking: trackingCode) {
    this.loading = true;
    this.tracking = Object.assign({}, tracking);
    this._reportService
      .getContractByTrackingCodeAndPinCode(
        tracking.pinCode,
        tracking.trackingCode
      )
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          if (res.isOk) {
            this.model = res.data;
            if (this.model.details) {
              this.totalMeghdar = this.model.details.reduce(
                (sum, detail) => sum + +detail.meghdar,
                0
              );
              this.totalTotalAmount = this.model.details.reduce(
                (sum, detail) => sum + detail.totalAmount,
                0
              );
              this.totalDiscountAmount = this.model.details.reduce(
                (sum, detail) => sum + detail.discountAmount,
                0
              );
              this.totalValueAddedAmount = this.model.details.reduce(
                (sum, detail) => sum + detail.valueAddedAmount,
                0
              );
              this.totalnetAmountRow = this.model.details.reduce(
                (sum, detail) => sum + detail.netAmountRow,
                0
              );
              this.totalcomplicationsAmount = this.model.details.reduce(
                (sum, detail) => sum + detail.complicationsAmount,
                0
              );
            }
          } else {
            this.message = res.messages.join(" ");
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
  acceptContract() {
    const params: ConfirmInterFace = {
      acceptText: "بله",
      declineText: "خیر",
      description: " آیا برای تایید قرارداد مطمئن هستید ؟",
      title:
        "تایید قرار داد" +
        " " +
        `"${this.model?.contractHeader.companyName.toUpperCase()}"`,
      type: "Confirm",
    };
    this._modalService.showConfirm(params, false).then((res) => {
      if (res) {
        this._reportService.acceptContract(this.eid).subscribe({
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
        { trackingCode: this.tracking.trackingCode },
        true
      )
      .then((value) => {})
      .catch((err) => {});
  }
}
