import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { HomeComponent } from './home/home.component';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {MenuComponent} from "./Menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {AboutComponent} from "./aboutOrdusion/aboutOrdusion.component";
import {StaffAugmentationComponent} from "./StaffAugmentation/StaffAugmentation.component";
import {CorporateTrainingComponent} from "./CorporateTraining/CorporateTraining.component";
import {SoftwareTestingComponent} from "./SoftwareTesting/SoftwareTesting.component";
import {ProductDevelopmentComponent} from "./ProductDevelopment/ProductDevelopment.component";
import {ClientsComponent} from "./Clients/Clients.component";
import {CareersComponent} from "./Careers/Careers.component";
import {ContactUsComponent} from "./ContactUs/ContactUs.component";
import {ProductDevelopmentStrategyComponent} from "./ProductDevelopmentStrategy/ProductDevelopmentStrategy";
import {EngineeringComponent} from "./Engineering/Engineering.component";
import {MaterialsComponent} from "./Materials/Materials.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    StaffAugmentationComponent,
    CorporateTrainingComponent,
    SoftwareTestingComponent,
    ProductDevelopmentComponent,
    ClientsComponent,
    CareersComponent,
    ContactUsComponent,
    ProductDevelopmentStrategyComponent,
    EngineeringComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
