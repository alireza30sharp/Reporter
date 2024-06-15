import { Component, OnInit } from "@angular/core";
import { VariablesReportInterFace } from "../../shared/interfaces/variables-report.interface";
import { ReportService } from "../services/report.service";
import { ActivatedRoute } from "@angular/router";
import { FactorInterFace } from "../interface";
import { ContractInterface } from "../interface/contarct";
import { ToastService } from "../../shared/services";
import { finalize } from "rxjs";

@Component({
  selector: "ngx-contract",
  templateUrl: "./contract.component.html",
  styleUrls: ["./contract.component.scss"],
  providers: [ReportService],
})
export class ContractComponent implements OnInit {
  data: FactorInterFace;
  eid: any;
  dataSetName: any = "Data";
  message: string = "";
  loading: boolean = false;
  model: ContractInterface;
  isAccepted: boolean = false;
  totalMeghdar=0;
  totalTotalAmount=0
  totalDiscountAmount=0;
  totalValueAddedAmount=0;
  totalnetAmountRow=0;
  totalcomplicationsAmount=0;
  // variablesInReport: Array<VariablesReportInterFace> = [
  //   { paramName: "NameCompony", paramValue: "صورت حساب اشکان جان" },
  // ];
  constructor(
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute,
    private _toastService: ToastService
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.eid = params["trackingCode"];
      this.getContractByTrackingCode();
    
    });
  }

  getContractByTrackingCode() {
    this.loading = true;
    this._reportService
      .getContractByTrackingCode(this.eid)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((res) => {
        if (res.isOk) {
          this.model = res.data;
          if(this.model.details){
            this.totalMeghdar = this.model.details.reduce((sum, detail) => sum + (+detail.meghdar), 0);
            this.totalTotalAmount = this.model.details.reduce((sum, detail) => sum + detail.totalAmount, 0);
            this.totalDiscountAmount = this.model.details.reduce((sum, detail) => sum + detail.discountAmount, 0);
            this.totalValueAddedAmount = this.model.details.reduce((sum, detail) => sum + detail.valueAddedAmount, 0);
            this.totalnetAmountRow = this.model.details.reduce((sum, detail) => sum + detail.netAmountRow, 0);
             this.totalcomplicationsAmount= this.model.details.reduce((sum, detail) => sum + detail.complicationsAmount, 0);

          }
        } else {
          this.message = res.messages.join(" ");
        }
      });
  }
  acceptContract() {
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
  rejectContract() {
    this._reportService.rejectContract(this.eid).subscribe({
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
