import { Component, OnInit } from "@angular/core";
import { VariablesReportInterFace } from "../../shared/interfaces/variables-report.interface";
import { ReportService } from "../services/report.service";
import { ActivatedRoute } from "@angular/router";
import { FactorInterFace } from "../interface";
import { ContractInterface } from "../interface/contarct";

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
  model: ContractInterface;
  isAccepted: boolean = false;
  // variablesInReport: Array<VariablesReportInterFace> = [
  //   { paramName: "NameCompony", paramValue: "صورت حساب اشکان جان" },
  // ];
  constructor(
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.eid = params["trackingCode"];
      this.getContractByTrackingCode();
    });
  }

  getContractByTrackingCode() {
    this._reportService.getContractByTrackingCode(this.eid).subscribe((res) => {
      if (res.isOk) {
        debugger;
        this.model = res.data;
      } else {
        this.message = res.messages.join(" ");
      }
    });
  }
  acceptContract() {
    this._reportService.acceptContract(this.eid).subscribe((res) => {
      console.log(res);
    });
  }
  rejectContract() {
    this._reportService.rejectContract(this.eid).subscribe((res) => {
      console.log(res);
    });
  }
}
