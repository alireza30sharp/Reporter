import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
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
import { IonList, IonModal } from "@ionic/angular";
import { rejectedDto } from "../../models";
export const genderList = [
  { label: "اشتباه بودن ادرس", value: 1 },
  { label: "جمع مبلغ اشتباه است", value: 2 },
];
@Component({
  selector: "ngx-contract-mobile",
  templateUrl: "./contract-mobile.component.html",
  styleUrls: ["./contract-mobile.component.scss"],
})
export class ContractMobileComponent extends ContractComponent {
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  categorySlidesVisible = false;
  listElements = [];
  rejectedList = "";
  activeCategory = 0;
  genderList = genderList;
  @ViewChild(IonModal) modal: IonModal;
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

  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.categorySlidesVisible = offset > 500;

    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;
      if (this.isElementInViewport(item)) {
        this.activeCategory = i;

        break;
      }
    }
  }
  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  dismiss() {
    this.modal.dismiss(null, "dismiss");
  }
  isAccept: boolean = false;
  open(isAccept: boolean) {
    this.isAccept = isAccept;
    this.modal.present();
  }
  accept() {
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
  handleChange(ev) {
    this.rejectedList = ev.target.value.toString();
  }
  reject(data: rejectedDto) {
    data.trackingCode = this.tracking.trackingCode;
    data.comment = this.rejectedList.toString();
    this._reportService
      .rejectContract(data as any)
      .pipe(finalize(() => {}))
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
  // Get all list viewchildren when ready
  ngAfterViewInit() {
    this.lists.changes.subscribe((_) => {
      this.listElements = this.lists.toArray();
    });
  }
}
