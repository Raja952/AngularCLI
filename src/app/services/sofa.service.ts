// sofa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SofaService {
  private baseUrl = 'https://localhost:7071/api'; // Your API base URL

  constructor(private http: HttpClient) { }

  // Example GET request
  getSofaData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sofa`);
  }

  // Example POST request
  createSofa(sofaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/sofa`, sofaData);
  }

  // Example GET with ID
  getSofaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/sofa/${id}`);
  }

  // Example PUT request
  updateSofa(id: number, sofaData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sofa/${id}`, sofaData);
  }

  // Example DELETE request
  deleteSofa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sofa/${id}`);
  }
}
