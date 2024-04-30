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
}
