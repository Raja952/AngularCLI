import { Component, OnInit } from '@angular/core';
import { SofaService } from '../../services/sofa.service'; // Import the service
import { Sofa } from '../../Model/SofaDO';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent implements OnInit {
  sofaData: any;
  loading = false;
  error = '';
  SofaList: Array<Sofa> = new Array<Sofa>();

  constructor(private sofaService: SofaService) { }

  ngOnInit(): void {
    this.loadSofaData();
  }

  loadSofaData(): void {
    this.loading = true;
    this.error = '';

    this.sofaService.getSofaData()
      .pipe(
        catchError(error => {
          this.error = 'Failed to load sofa data. Please try again.';
          this.loading = false;
          return of(null);
        })
      )
      .subscribe(data => {
        if (data) {
          this.sofaData = data;
        }
        this.loading = false;
      });
  }

  // Example method to create new sofa
  createNewSofa(): void {
    const newSofa = {
      name: 'New Sofa',
      material: 'Leather',
      color: 'Black',
      price: 999.99
    };

    this.sofaService.createSofa(newSofa)
      .subscribe(
        response => {
          console.log('Sofa created:', response);
          this.loadSofaData(); // Refresh the data
        },
        error => {
          console.error('Error creating sofa:', error);
        }
      );
  }

  // Example method to update sofa
  updateSofa(id: number): void {
    const updatedData = {
      name: 'Updated Sofa Name',
      price: 1299.99
    };

    this.sofaService.updateSofa(id, updatedData)
      .subscribe(
        response => {
          console.log('Sofa updated:', response);
          this.loadSofaData(); // Refresh the data
        },
        error => {
          console.error('Error updating sofa:', error);
        }
      );
  }

  // Example method to delete sofa
  deleteSofa(id: number): void {
    if (confirm('Are you sure you want to delete this sofa?')) {
      this.sofaService.deleteSofa(id)
        .subscribe(
          response => {
            console.log('Sofa deleted:', response);
            this.loadSofaData(); // Refresh the data
          },
          error => {
            console.error('Error deleting sofa:', error);
          }
        );
    }
  }
}
