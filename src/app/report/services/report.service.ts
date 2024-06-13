import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ApiUrlService } from "../../api-url.service";
import { Data, response } from "../../shared/models";
import { ContractInterface } from "../interface/contarct";
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
    return this.$http.get<response<ContractInterface>>(
      this.urlSvc.contract.GetContractByTrackingCode,
      {
        params: { TrackingCode: Id },
      }
    );
  }
  acceptContract(Id: number) {
    return this.$http.post<response<ContractInterface>>(
      this.urlSvc.contract.AcceptContract,
      { trackingCode: Id }
    );
  }
  rejectContract(Id: number) {
    return this.$http.post<response<ContractInterface>>(
      this.urlSvc.contract.RejectContract,
      { trackingCode: Id }
    );
  }
}
