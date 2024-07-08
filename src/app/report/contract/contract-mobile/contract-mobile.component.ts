import { Component, OnInit } from "@angular/core";
import { VariablesReportInterFace } from "../../../shared/interfaces/variables-report.interface";
import { ReportService } from "../../services/report.service";
import { ActivatedRoute } from "@angular/router";
import { FactorInterFace } from "../../interface";
import { ContractInterface } from "../../interface/contarct";
import { ModalService, ToastService } from "../../../shared/services";
import { finalize } from "rxjs";
import { ConfirmInterFace } from "../../../shared/ki-components/ki-confirmation/confirm.interface";
import { UserAuthService } from "../../../shared/services/user-auth.service";
import { trackingCode } from "../../../shared/models";
import { RejectContractFormModalCompone } from "../../components/templates/reject-contract-form-modal/reject-contract-form-modal.component";
import { ContractComponent } from "../contract.component";
@Component({
  selector: "ngx-contract-mobile",
  templateUrl: "./contract-mobile.component.html",
  styleUrls: ["./contract-mobile.component.scss"],
})
export class ContractMobileComponent
  extends ContractComponent
  implements OnInit
{
  constructor(
    public override _reportService: ReportService,
    public override _activatedRoute: ActivatedRoute,
    public override _toastService: ToastService,
    public override _modalService: ModalService,
    public override authSvc: UserAuthService
  ) {
    super(
      _reportService,
      _activatedRoute,
      _toastService,
      _modalService,
      authSvc
    );
  }
  ngOnInit(): void {}
}
