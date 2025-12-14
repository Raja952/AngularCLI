import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-tables',
  templateUrl: './study-tables.component.html',
  styleUrls: ['./study-tables.component.css']
})
export class StudyTablesComponent implements OnInit {

  studyTables: any;
  loading: boolean = false;
  error: string = '';


  ngOnInit(): void {
    this.loadSampleData();

  }


  loadSampleData(): void {
    this.studyTables = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/e/1600x1760/serengeti-mango-wood-writing-table-in-white-wash-finish-serengeti-mango-wood-writing-table-in-white--5cjytw.jpg',
        alt: 'Study Table 1',
        title: 'Modern Study Table',
        Amount: 10000,
        description: 'Ergonomic study table with storage compartments',
        brand: 'By Woodsworth',
        rating: 4.5,
        discount: '20% OFF',
        emi: 'EMI starting from ₹833/month',
        shipping: 'Express Shipping in 1 day',
        quantity: 15
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/w/i/1600x1760/winner-hutch-desk-in-rigato-walnut-finish-winner-hutch-desk-in-rigato-walnut-finish-ijoses.jpg',
        alt: 'Study Table 2',
        title: 'Classic Study Table',
        Amount: 15000,
        description: 'Modern study table with cable management',
        brand: 'By Casacraft',
        rating: 4.2,
        discount: '15% OFF',
        emi: 'EMI starting from ₹1,250/month',
        shipping: 'Ships in 2 days',
        quantity: 8
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/l/1600x1760/claire-sheesham-wood-study-table-in-provincial-teak-finish-by-woodsworth-claire-sheesham-wood-study--zpoelh.jpg',
        alt: 'Study Table 3',
        title: 'Luxury Study Table',
        Amount: 25000,
        description: 'Space-saving study table with bookshelf',
        brand: 'By Amberville',
        rating: 4.8,
        discount: '30% OFF',
        emi: 'EMI starting from ₹2,083/month',
        shipping: 'Free Shipping',
        quantity: 5
      },
      {
        id: 4,
        src: 'https://ii1.pepperfry.com/media/catalog/product/m/e/1600x1760/melania-study-table-in-natural-walnut-colour-by-casacraft-melania-study-table-in-natural-walnut-colo-cfio7n.jpg',
        alt: 'Study Table 4',
        title: 'Premium Study Table',
        Amount: 18000,
        description: 'Adjustable height study table for comfortable working',
        brand: 'By A Globia Creations',
        rating: 4.3,
        discount: '25% OFF',
        emi: 'EMI starting from ₹1,500/month',
        shipping: 'Ships in 3-5 days',
        quantity: 12
      },
      {
        id: 5,
        src: 'assets/images/default-study-table.jpg',
        alt: 'Study Table 5',
        title: 'Basic Study Table',
        Amount: 8000,
        description: 'Foldable study table for small spaces',
        brand: 'By Spacewood',
        rating: 4.0,
        discount: '10% OFF',
        emi: 'EMI starting from ₹667/month',
        shipping: 'Same Day Delivery',
        quantity: 20
      },
      {
        id: 6,
        src: 'https://ii1.pepperfry.com/media/catalog/product/t/r/1600x1760/troy-writing-table-by-a-globia-creations-troy-writing-table-by-a-globia-creations-ztjbwy.jpg',
        alt: 'Study Table 6',
        title: 'Executive Study Table',
        Amount: 30000,
        description: 'Study table with LED lighting and USB ports',
        brand: 'By Pepperfry',
        rating: 4.7,
        discount: 'Best Seller',
        emi: 'EMI starting from ₹2,500/month',
        shipping: 'Express Shipping in 1 day',
        quantity: 3
      },
      {
        id: 7,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/t/1600x1760/stanfield-sheesham-wood-writing-table-in-honey-oak-finish-by-amberville-stanfield-sheesham-wood-writ-fgrotq.jpg',
        alt: 'Study Table 7',
        title: 'Professional Study Table',
        Amount: 22000,
        description: 'Premium wooden study table with drawers',
        brand: 'By Woodsworth',
        rating: 4.6,
        discount: '20% OFF',
        emi: 'EMI starting from ₹1,833/month',
        shipping: 'Free Shipping',
        quantity: 7
      }
    ];

    
  }


  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }



}
