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
  public model: ContractInterface = {
    contractConcreteSupplementary: null,
    contractHeader: null,
    details: [],
  };
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
  ngOnInit(): void {
    this.model = Object.assign(
      {},
      {
        contractHeader: {
          id: 1,
          shContract: 5,
          trackingCode: "cc9fde59-3d43-46f3-84e2-7017db7130fb",
          contractDate: "1403/03/14",
          contractTime: "19:50:39",
          companyName: "بتن ستوده",
          customerCode: "3500",
          customerName: "مشتری",
          customerMobile: "09910311388",
          totalAmount: 16340000,
          additionsAndDeduction: 2340,
          customerEconomicNumber: 234234,
          customerPostalCode: 1231232312312,
          customerAddress:
            " sdhf asdofiua ao sfausd foiausdofi uasodif uasoidfuoasidu foauf oasudf oiasudfoiaufoiasudfoisdfoiasdfoioisd ao  ",
          valueAddedAmount: 2340,
          tollAmount: 2130,
          netAmount: 16340000,
          howToSettle:
            "df dsf df  sdfj sldkfj pasdjfp ajsdpfj pasdjfpiasjd fasdf asdf asdf asd hisud hfiaushfiou shdioufh asiud hiausdhg fiuashdfiahsidfnasdf asd fasdfasd",
          contractText1:
            "asdf sdf asdf asdf asdf asdf asdf asdfa sdfasdf asd foioiho asbdjf bajd \n sdf ahsdfiagsdifaiudsfg iasd gfiasg dio fgasidfgasdk fasdf asdf \n sdfh aiusdhf iouashdifuh asidughf iuas gdiofagsid fiasg dfiagsudyfvua  \n gdf uyasdgfui agsduif auiguiadsf iyasdgfioasgdhfipoash difuh aisuf a",
          contractText2: "asdf asdf asdf dsf asdfas dfasdfasdfasd",
          isAccepted: false,
          lastDateTimeAccept: "",
          isRejected: true,
          lastDateTimeReject: "",
          additionalInformation1:
            "asdf asdfasdfa asdfasdf adf adfasdfsdf asdf wthtjrrtjyfxdfghdfghsdfgss dfgadsdfasda \n asdfa sdfasdf asdfuasdgf gasdf aysdgf iasdgfyasgd fuyasdguif gasidf asdg  dasdf asdfas \n sadfasdfasdfasd fawf asdf asdfa sdfasdf asfasdf asdfasd fasdf asdfasdfgh askdfgbkasdfhasdbkfbasdaf asdfdas  \n sdfasdfasdf  ",
          additionalInformation2:
            "dfasd asdfasdfs dfasdf asdf asdfasd fasdf asdfas sdfas dsdaf \n fgsdufg iusdguisyfuig siudfgisudfhgiusdfhgiushdf igsdfiugh isudfhg isudfhgiusdhfgiu hifg dfg f \n asdfgasidf hoasdhfoashdof hasodf haskldfho asdofh asodhfoiashdf iouahsdoifuh aioushf iuasida \n sdfogyaso du fhaosdhf ioaus dfiuhasdif hasdiohf iouasdhfiu hais",
          additionalInformation3:
            "as dfasdfasdfsdf asasdf asdf asd fasdf asd f",
          additionalInformation4:
            "sdfdgg sdfg sdfg sdfg scfghdfgh fgh dfgh dfgh dfgh dghdfghdfh dfh dfhdfg sdfg sdfg sdfg  /n \n feasedfasdfasdfa   qasighisadh fioahos dhfasdf sadf sadfasdfasdf \n dfasdfasdfasdfasdf asdfasdfasdfasdfasdddddddddddddddddfasdfasdfasdfwe rw e aedfasdf \nsdg",
          additionalInformation5:
            "sdfg sdfasdf asdf g df gsdf gsdfg sdfg sdf gsdfgasdfasdfasdf asdfasd \n asdfasd fasd sdaf asdfasdfasdf asdfasdfgd sdfg sdfg we r dtyjh gyuik ykghkghjk gydty dytudrtydrtyrty ertasdf asdfa sdasdf asdf asdf asd  asdfa\n ydertyerty dfhsdfgsdfg sdfg",
        },
        details: [
          {
            id: 27,
            headerId: 1,
            productCode: 1,
            productName: "ماسه",
            meghdar: "2",
            unitAmount: 250000,
            totalAmount: 500000,
            discountPercent: 54350,
            discountAmount: 324520,
            valueAddedPercentage: 234523450,
            valueAddedAmount: 3452340,
            complicationsPercentage: 23452340,
            complicationsAmount: 23452340,
            netAmountRow: 5002345000,
          },
          {
            id: 28,
            headerId: 1,
            productCode: 2,
            productName: "نخودی",
            meghdar: "33",
            unitAmount: 480000,
            totalAmount: 15840000,
            discountPercent: 23452340,
            discountAmount: 3452340,
            valueAddedPercentage: 23450,
            valueAddedAmount: 234520,
            complicationsPercentage: 2345240,
            complicationsAmount: 234523450,
            netAmountRow: 15840000,
          },
        ],
        contractConcreteSupplementary: {
          id: 14,
          carryingCalculationType: "واحد فروش",
          carryingUnitAmount: 234523450,
          calculateTheCarryingAmountTo: 23450,
          unitAmountOfCarryingDeficit: 2345230,
          amountOfCarryingTip: 23450,
          pumpType: "ثابت",
          pumpCalculationType: "واحد فروش",
          pumpUnitAmount: 234523450,
          unitAmountOfPumpDeficit: 323450,
          pumpDeficitAmountTo: 1234,
          pumpTipUnitAmount: 123412,
          resistanceCategory: "34",
          theAmountOfCement: "45340",
          waterToCementRatio: "3450",
          minimumResistance: "34",
          typeOfCement: "3",
          projectAddress:
            "fdgh dgfh dfgh dfgh df gsh gaohohgkosdfhgsdf gsdghioudfhg ioushdgsdfgos dfgoshfgosd oijhdf",
          headerId: 1,
        },
      }
    );
  }

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
            debugger;
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
