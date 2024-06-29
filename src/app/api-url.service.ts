import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

const BASE_URL = environment.apiUrl + "/api/";
const BASE_URL_v1 = BASE_URL + "/api/v1/";
@Injectable({
  providedIn: "root",
})
export class ApiUrlService {
  constructor() {}
  barname = {
    GetBarname: BASE_URL + "Barname/GetBarname",
    GetBarnameByLink: BASE_URL + "Barname/GetBarnameByLink",
  };
  contract = {
    GetContractByTrackingCode: BASE_URL + "Contract/GetContractByTrackingCode",
    GetContractByTrackingCodeAndPinCode:
      BASE_URL + "Contract/GetContractByTrackingCodeAndPinCode",
    AcceptContract: BASE_URL + "Contract/AcceptContract",
    RejectContract: BASE_URL + "Contract/RejectContract",
  };
  clientPrerequisits = {
    GetClientPrerequisits:
      BASE_URL + "ClientPrerequisits/GetClientPrerequisits",
  };
}
