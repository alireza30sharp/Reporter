import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, finalize } from "rxjs";
import { ReportService } from "../../../report/services/report.service";
import { remainingTime } from "@persian-tools/persian-tools";
import { ModalService, ToastService } from "../../../shared/services";
import { UserAuthService } from "../../../shared/services/user-auth.service";

@Component({
  selector: "ngx-otp-code",
  templateUrl: "./otp-code.component.html",
  styleUrls: ["./otp-code.component.scss"],
  providers: [ReportService],
})
export class OtpCodeComponent implements OnInit {
  eid: any;
  loading: boolean;
  otpTimer = 0;
  otpTimerTextAction$ = new BehaviorSubject("00:00");
  expireSecound = 0;
  otpIntervalId: any;
  lastFourDigitPhoneNumber: string;
  constructor(
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute,
    readonly authSvc: UserAuthService
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
        debugger;
        if (res.isOk) {
          this.expireSecound = res.data.pinCodeExpireSecond;
          this.lastFourDigitPhoneNumber = res.data.lastFourDigitPhoneNumber;
          this.runForm_otp();
        }
      });
  }
  verifyOtp(pin) {
    this.authSvc.prepareSigning(pin, this.eid);
  }
  runForm_otp() {
    this.otpTimer = Date.now() + 3 * this.expireSecound * 1000;
    this.otpTimerTextAction$.next("03:00");
    const numFormat = new Intl.NumberFormat("en", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
    clearInterval(this.otpIntervalId);
    this.otpIntervalId = setInterval(() => {
      const { years, months, days, hours, minutes, seconds, isFinished } =
        remainingTime(this.otpTimer);
      if (isFinished) {
        this.otpTimer = 0;
        clearInterval(this.otpIntervalId);
      }
      this.otpTimerTextAction$.next(
        `${numFormat.format(minutes)}:${numFormat.format(seconds)}`
      );
    }, 1000);
  }
}
