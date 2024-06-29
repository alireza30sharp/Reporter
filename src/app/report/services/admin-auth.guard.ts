import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { UserAuthService } from "../../shared/services/user-auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(readonly authSvc: UserAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let trackingCode = route.params["trackingCode"];
    if (!this.authSvc.validateToken(this.authSvc.token!)) {
      this.authSvc.signing(trackingCode);
      return false;
    } else {
      return this.authSvc.token != null;
    }

    // && this.authSvc.user.role != "administrator";
  }
}
