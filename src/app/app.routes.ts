import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
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


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'staff', component: StaffAugmentationComponent},
  { path: 'training', component: CorporateTrainingComponent},
  { path: 'testing', component: SoftwareTestingComponent},
  { path: 'product', component: ProductDevelopmentComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'strategy', component: ProductDevelopmentStrategyComponent},
  { path: 'engineering', component: EngineeringComponent},
  { path: 'materials', component: MaterialsComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'github', component: RepoBrowserComponent,
  //   children: [
  //     { path: '', component: RepoListComponent },
  //     { path: ':org', component: RepoListComponent,
  //       children: [
  //         { path: '', component: RepoDetailComponent },
  //         { path: ':repo', component: RepoDetailComponent }
  //       ]
  //     }]
  // },
  // { path: 'contact', component: ContactComponent }
];
