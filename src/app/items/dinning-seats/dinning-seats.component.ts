import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinning-seats',
  templateUrl: './dinning-seats.component.html',
  styleUrls: ['./dinning-seats.component.css']
})
export class DinningSeatsComponent implements OnInit  {

  diningSets: any;
  loading: boolean = false;
  error: string = '';


  ngOnInit(): void {
    this.loadSampleData();
  }



  loadSampleData(): void {
    this.diningSets = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/6/-/1100x1210/6-seater-dining-set-in-provincial-teak-finish-by-woodsworth-6-seater-dining-set-in-provincial-teak-fin-7pumqu.jpg',
        alt: '6 Seater Dining Set',
        title: '6 Seater Dining Set',
        Amount: 44999,
        description: 'Complete 6-seater dining set with table and chairs',
        brand: 'By Woodsworth',
        rating: 4.6,
        discount: '30% OFF',
        emi: 'EMI starting from ₹2,163/month',
        shipping: 'Free Shipping',
        quantity: 7
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/4/-/1100x1210/4-seater-dining-set-in-walnut-finish-by-woodsworth-4-seater-dining-set-in-walnut-finish-by-woodswort-guhbpy.jpg',
        alt: '4 Seater Dining Set',
        title: '4 Seater Dining Set',
        Amount: 32999,
        description: 'Compact 4-seater dining set for small families',
        brand: 'By Woodsworth',
        rating: 4.4,
        discount: '25% OFF',
        emi: 'EMI starting from ₹1,586/month',
        shipping: 'Ships in 3 days',
        quantity: 15
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/e/x/1100x1210/extendable-dining-table-set-in-walnut-finish-by-woodsworth-extendable-dining-table-set-in-walnut-finis-u4rqqu.jpg',
        alt: 'Extendable Dining Set',
        title: 'Extendable Dining Set',
        Amount: 56999,
        description: 'Extendable dining table with 6 chairs',
        brand: 'By Woodsworth',
        rating: 4.7,
        discount: '35% OFF',
        emi: 'EMI starting from ₹2,740/month',
        shipping: 'Free Shipping',
        quantity: 4
      },
      {
        id: 4,
        src: 'assets/images/default-dining.jpg',
        alt: 'Glass Top Dining Set',
        title: 'Glass Top Dining Set',
        Amount: 38999,
        description: 'Modern glass top dining set with 4 chairs',
        brand: 'By Casacraft',
        rating: 4.5,
        discount: '20% OFF',
        emi: 'EMI starting from ₹1,875/month',
        shipping: 'Express Shipping in 2 days',
        quantity: 11
      }
    ];

    
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }


}
