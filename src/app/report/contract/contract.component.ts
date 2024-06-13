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
          debugger;
          this.model = res.data;
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
