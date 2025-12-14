import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinets-sideboards',
  templateUrl: './cabinets-sideboards.component.html',
  styleUrls: ['./cabinets-sideboards.component.css']
})
export class CabinetsSideboardsComponent implements OnInit {

  cabinets: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }


  loadSampleData(): void {
    this.cabinets = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/t/v/1100x1210/tv-unit-in-walnut-finish-by-woodsworth-tv-unit-in-walnut-finish-by-woodsworth-r7j7c2.jpg',
        alt: 'TV Cabinet',
        title: 'TV Cabinet',
        Amount: 19999,
        description: 'Modern TV cabinet with storage shelves',
        brand: 'By Woodsworth',
        rating: 4.6,
        discount: '35% OFF',
        emi: 'EMI starting from ₹961/month',
        shipping: 'Free Assembly',
        quantity: 10
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/i/1100x1210/sideboard-in-walnut-finish-by-woodsworth-sideboard-in-walnut-finish-by-woodsworth-u8r2jf.jpg',
        alt: 'Wooden Sideboard',
        title: 'Wooden Sideboard',
        Amount: 24999,
        description: 'Elegant sideboard for dining room',
        brand: 'By Woodsworth',
        rating: 4.5,
        discount: '30% OFF',
        emi: 'EMI starting from ₹1,201/month',
        shipping: 'Ships in 4 days',
        quantity: 8
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/t/1100x1210/storage-cabinet-in-walnut-finish-by-woodsworth-storage-cabinet-in-walnut-finish-by-woodsworth-8bmt8y.jpg',
        alt: 'Storage Cabinet',
        title: 'Storage Cabinet',
        Amount: 17999,
        description: 'Multi-purpose storage cabinet',
        brand: 'By Woodsworth',
        rating: 4.4,
        discount: '25% OFF',
        emi: 'EMI starting from ₹865/month',
        shipping: 'Free Shipping',
        quantity: 15
      },
      {
        id: 4,
        src: 'assets/images/default-cabinet.jpg',
        alt: 'Display Cabinet',
        title: 'Display Cabinet',
        Amount: 14999,
        description: 'Glass display cabinet for collectibles',
        brand: 'By Casacraft',
        rating: 4.3,
        discount: '20% OFF',
        emi: 'EMI starting from ₹721/month',
        shipping: 'Express Shipping in 2 days',
        quantity: 12
      }
    ];

    
  }



  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }

}
