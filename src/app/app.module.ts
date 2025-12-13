import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Add this import
import { HttpClientModule } from '@angular/common/http'; // Add this import


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CarouselComponent } from './carousel/carousel.component';
import { ImageGalleryComponent } from './home/image-gallery/image-gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryGridComponent,
    SofaComponent,
    BedsComponent,
    DinningSeatsComponent,
    StudyTablesComponent,
    CentreTablesComponent,
    ReclinersComponent,
    SectionalSofasComponent,
    WardrobesComponent,
    LuxuryFurnitureComponent,
    OfficeFurnitureComponent,
    ShoeRacksComponent,
    CabinetsSideboardsComponent,
    HomeComponent,
    CarouselComponent,
    ImageGalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Add this
    HttpClientModule // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
