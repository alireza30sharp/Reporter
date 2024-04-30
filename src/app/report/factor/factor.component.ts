import { Component, OnInit } from "@angular/core";
import { VariablesReportInterFace } from "../../shared/interfaces/variables-report.interface";
import { ReportService } from "../services/report.service";
import { ActivatedRoute } from "@angular/router";
import { FactorInterFace } from "../interface";

@Component({
  selector: "ngx-factor",
  templateUrl: "./factor.component.html",
  styleUrls: ["./factor.component.scss"],
  providers: [ReportService],
})
export class FactorComponent implements OnInit {
  data: FactorInterFace;
  eid: any;
  dataSetName: any = "Data";
  message: string = "";
  // variablesInReport: Array<VariablesReportInterFace> = [
  //   { paramName: "NameCompony", paramValue: "صورت حساب اشکان جان" },
  // ];
  constructor(
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.eid = params["eid"];
      this.getBarnameByLink();
    });
  }

  getBarnameByLink() {
    this._reportService.getCompaniyById(this.eid).subscribe((res) => {
      if (res.isOk) {
        this.data = {
          Mande: {
            Mande: 0,
            MandeGhabli: 0,
          },
          Ghabz_Masale: {
            Time_Fact: res.data.timeLoading,
            Time_In: "",
            Date_Fact: res.data.dateLoading,
            Empty_Scale: res.data.emptyScale,
            Full_Scale: res.data.fullScale,
            Pelak_Car: res.data.carPlate,
            Sh_Ghabz: res.data.shBarname,
            Name_H: res.data.customerName,
            Driver_Car: res.data.driverName,
            StrVaziatMande: "",
            Jam_Khales: 0,
            Takhfif: 0,
            Mab_Vahed: 0,
            Net_Weight: res.data.netWeight,
            Name_Kala: res.data.productName,
          },
        };
      } else {
        this.message = res.messages.join(" ");
      }
    });
  }
}
