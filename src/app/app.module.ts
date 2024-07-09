import { BrowserModule,HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, isDevMode } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// import { CoreModule } from "./@core/core.module";
// import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";


// import {
//   NbChatModule,
//   NbDatepickerModule,
//   NbDialogModule,
//   NbMenuModule,
//   NbSidebarModule,
//   NbToastrModule,
//   NbWindowModule,
// } from "@nebular/theme";
import { SharedModule } from "./shared/shared.module";
import { TestComponent } from "./test/test.component";
import { ThemeModule } from "./@theme/theme.module";
import { CoreModule } from "./@core/core.module";
import { NbMenuModule, NbSidebarModule, NbToastrModule } from "@nebular/theme";
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HammerModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    IonicModule.forRoot(),
    // NbDatepickerModule.forRoot(),
    // NbDialogModule.forRoot(),
    // NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    SharedModule.forRoot(),
    // NbChatModule.forRoot({
    //   messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    // }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
