import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToastNotificationModule, CardModule, SparklineChartModule, InfoStatusCardModule,
  AboutModalModule, ApplicationLauncherModule, ToastNotificationListModule, NotificationService } from 'patternfly-ng';

// NGX Bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBasicExampleComponent } from './card-basic-example/card-basic-example.component';
import { InfoStatusCardExampleComponent } from './info-status-card-example/info-status-card-example.component';
import { AboutModalExampleComponent } from './about-modal-example/about-modal-example.component';
import { ApplicationLauncherExampleComponent } from './application-launcher-example/application-launcher-example.component';
import { ToastNotificationListExampleComponent } from './toast-notification-list-example/toast-notification-list-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBasicExampleComponent,
    InfoStatusCardExampleComponent,
    AboutModalExampleComponent,
    ApplicationLauncherExampleComponent,
    ToastNotificationListExampleComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    ToastNotificationModule,  BsDropdownModule.forRoot(), CardModule,
    SparklineChartModule, InfoStatusCardModule, ApplicationLauncherModule,
    AboutModalModule, ModalModule.forRoot(),
    ToastNotificationListModule
  ],
  providers: [BsDropdownConfig, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
