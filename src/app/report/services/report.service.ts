import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { rejectedDto } from "../../report/models";

import { ApiUrlService } from "../../api-url.service";
import { Data, response } from "../../shared/models";
import { ContractInterface } from "../interface/contarct";
import { confirmationsDto } from "../models/confirmation";
@Injectable()
export class ReportService {
  constructor(
    private readonly $http: HttpClient,
    private readonly urlSvc: ApiUrlService
  ) {}

  getCompaniyById(Id: number) {
    return this.$http.get<response<any>>(this.urlSvc.barname.GetBarnameByLink, {
      params: { Id: Id },
    });
  }
  getContractByTrackingCode(Id: number) {
    return this.$http.get<response<any>>(
      this.urlSvc.contract.GetContractByTrackingCode,
      {
        params: { TrackingCode: Id },
      }
    );
  }
  getOnlineConfirmationsByTrackingCode(Id: string) {
    return this.$http.get<response<confirmationsDto>>(
      this.urlSvc.OnlineConfirmations.GetOnlineConfirmationsByTrackingCode,
      {
        params: { TrackingCode: Id },
      }
    );
  }
  getContractByTrackingCodeAndPinCode(pinCode: string, Id: string) {
    return this.$http.get<response<ContractInterface>>(
      this.urlSvc.contract.GetContractByTrackingCodeAndPinCode,
      {
        params: { PinCode: pinCode, TrackingCode: Id },
      }
    );
  }
  acceptContract(Id: string) {
    return this.$http.post<response<any>>(this.urlSvc.contract.AcceptContract, {
      trackingCode: Id,
    });
  }
  acceptOnlineConfirmations(Id: number) {
    return this.$http.post<response<any>>(
      this.urlSvc.OnlineConfirmations.AcceptOnlineConfirmations,
      {
        trackingCode: Id,
      }
    );
  }
  rejectContract(rejectedDto: rejectedDto) {
    return this.$http.post<response<any>>(
      this.urlSvc.contract.RejectContract,
      rejectedDto
    );
  }
  rejectOnlineConfirmations(rejectedDto: rejectedDto) {
    return this.$http.post<response<any>>(
      this.urlSvc.OnlineConfirmations.RejectOnlineConfirmations,
      rejectedDto
    );
  }
}
