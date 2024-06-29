import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { JwtToken, User } from "../../report/models";
import { trackingCode } from "../models";

@Injectable({
  providedIn: "root",
})
export class UserAuthService {
  static AUTH_REDIRECT_KEY = "auth_redirect_uri_pin";
  static JWT_KEY = "token";
  constructor(private router$: Router) {}
  private trackingCodeSource = new ReplaySubject<trackingCode | null>(1);
  trackingCode$ = this.trackingCodeSource.asObservable();

  user?: User;

  token?: any;

  signing(trackingCode: string) {
    localStorage.removeItem(UserAuthService.AUTH_REDIRECT_KEY);
    this.router$.navigateByUrl(`/otp/${trackingCode}`);
  }

  prepareSigning(pinCode: string, trackingCode: string): boolean {
    if (!trackingCode) {
      return false;
    }
    try {
      this.token = trackingCode;
      // save to storage and cookie
      this.saveToken(pinCode, this.token as any);
      // check redirect page
      const authUri = localStorage.getItem(UserAuthService.AUTH_REDIRECT_KEY);
      if (authUri) {
        location.assign(authUri);
      }
      this.router$.navigateByUrl(`/report/contract/${this.token}`);
      return true;
    } catch (error) {
      return false;
    }
  }

  saveToken(pinCode: string, trackingCode: string) {
    this.setUser(pinCode, trackingCode);
    localStorage.setItem(UserAuthService.JWT_KEY, JSON.stringify(trackingCode));
  }
  setUser(pinCode: string, trackingCode: string) {
    if (pinCode) {
      this.trackingCodeSource.next({
        pinCode: pinCode,
        trackingCode: trackingCode,
      });
    }
  }
  // restoreToken(): string | undefined {
  //   var token = localStorage.getItem(UserAuthService.JWT_KEY);
  //   if (token) {
  //     try {
  //       if (this.validateToken(token)) {
  //         return token;
  //       }
  //     } catch {}
  //   }
  //   return undefined;
  // }

  validateToken(jwt: string) {
    if (jwt) {
      this.setUser(null, jwt as any);
      return true;
    }
    return false;
  }
}
