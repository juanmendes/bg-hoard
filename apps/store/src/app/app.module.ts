import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { appRoutes } from './app.routes';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    StoreUiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
