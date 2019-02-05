import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CapitalisePipe } from './capitalise.pipe';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ChangeColorDirective,
    CapitalisePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
