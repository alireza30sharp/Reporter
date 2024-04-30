import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ApiUrlService } from "../../api-url.service";
import { response } from "../../shared/models";
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
}
