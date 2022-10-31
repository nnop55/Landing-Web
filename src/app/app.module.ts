import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InvestComponent } from './main/invest/invest.component';
import { FarmvestUpComponent } from './main/farmvest-up/farmvest-up.component';
import { PathwayComponent } from './main/pathway/pathway.component';
import { FarmvestDownComponent } from './main/farmvest-down/farmvest-down.component';
import { CustomersComponent } from './main/customers/customers.component';
import { DownloadComponent } from './main/download/download.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CreateAccComponent } from './auth/create-acc/create-acc.component';
import { AuthGuard } from './router-guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InvestComponent,
    FarmvestUpComponent,
    PathwayComponent,
    FarmvestDownComponent,
    CustomersComponent,
    DownloadComponent,
    FooterComponent,
    AuthComponent,
    NavbarComponent,
    CreateAccComponent,
    AboutComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
