import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { SofaComponent } from './items/sofa/sofa.component';
import { BedsComponent } from './items/beds/beds.component';
import { DinningSeatsComponent } from './items/dinning-seats/dinning-seats.component';
import { StudyTablesComponent } from './items/study-tables/study-tables.component';
import { CentreTablesComponent } from './items/centre-tables/centre-tables.component';
import { ReclinersComponent } from './items/recliners/recliners.component';
import { SectionalSofasComponent } from './items/sectional-sofas/sectional-sofas.component';
import { WardrobesComponent } from './items/wardrobes/wardrobes.component';
import { LuxuryFurnitureComponent } from './items/luxury-furniture/luxury-furniture.component';
import { OfficeFurnitureComponent } from './items/office-furniture/office-furniture.component';
import { ShoeRacksComponent } from './items/shoe-racks/shoe-racks.component';
import { CabinetsSideboardsComponent } from './items/cabinets-sideboards/cabinets-sideboards.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from '../app/contact-us/contact-us.component';
import { AboutUSComponent } from '../app/about-us/about-us.component';
import { CarpenterComponent } from './JoinUS/carpenter/carpenter.component';
import { EngineerComponent } from './JoinUS/engineer/engineer.component';
import { ContractorComponent } from './JoinUS/contractor/contractor.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'home', component: HomeComponent },
  { path: '', component: CategoryGridComponent },
  { path: 'items/sofa', component: SofaComponent },
  { path: 'items/beds', component: BedsComponent },
  { path: 'items/dinning-seats', component: DinningSeatsComponent },
  { path: 'items/study-tables', component: StudyTablesComponent },
  { path: 'items/centre-tables', component: CentreTablesComponent },
  { path: 'items/recliners', component: ReclinersComponent },
  { path: 'items/sectional-sofas', component: SectionalSofasComponent },
  { path: 'items/wardrobes', component: WardrobesComponent },
  { path: 'items/luxury-furniture', component: LuxuryFurnitureComponent },
  { path: 'items/office-furniture', component: OfficeFurnitureComponent },
  { path: 'items/shoe-racks', component: ShoeRacksComponent },
  { path: 'items/cabinets-sideboards', component: CabinetsSideboardsComponent },
  { path: 'contact-us', component: ContactUSComponent },
  { path: 'about-us', component: AboutUSComponent },
  { path: 'JoinUS/carpenter', component: CarpenterComponent },
  { path: 'JoinUS/Engineer', component: EngineerComponent },
  { path: 'JoinUS/contractor', component: ContractorComponent },

  { path: '**', redirectTo: '' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
