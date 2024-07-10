import { Component, ElementRef, OnInit, QueryList, ViewChildren } from "@angular/core";
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
import { IonList } from "@ionic/angular";
@Component({
  selector: "ngx-contract-mobile",
  templateUrl: "./contract-mobile.component.html",
  styleUrls: ["./contract-mobile.component.scss"],
})
export class ContractMobileComponent extends ContractComponent {
  @ViewChildren(IonList, { read: ElementRef }) lists: QueryList<ElementRef>;
  categorySlidesVisible = false;
	listElements = [];
  activeCategory = 0;
  
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
			rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

  // Get all list viewchildren when ready
	ngAfterViewInit() {
		this.lists.changes.subscribe((_) => {
			this.listElements = this.lists.toArray();
		});
	}
}
