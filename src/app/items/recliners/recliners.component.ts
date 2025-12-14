import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recliners',
  templateUrl: './recliners.component.html',
  styleUrls: ['./recliners.component.css']
})
export class ReclinersComponent implements OnInit {
  recliners: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }



  loadSampleData(): void {
    this.recliners = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/i/1100x1210/single-recliner-in-black-colour-by-trendyol-single-recliner-in-black-colour-by-trendyol-8tkvqj.jpg',
        alt: 'Single Recliner',
        title: 'Single Recliner Chair',
        Amount: 18999,
        description: 'Comfortable single recliner with massage function',
        brand: 'By Trendyol',
        rating: 4.8,
        discount: '40% OFF',
        emi: 'EMI starting from ₹913/month',
        shipping: 'Free Shipping',
        quantity: 9
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/massage-recliner-in-brown-colour-by-trendyol-massage-recliner-in-brown-colour-by-trendyol-tlhn0l.jpg',
        alt: 'Massage Recliner',
        title: 'Massage Recliner',
        Amount: 34999,
        description: 'Premium massage recliner with multiple settings',
        brand: 'By Trendyol',
        rating: 4.9,
        discount: '35% OFF',
        emi: 'EMI starting from ₹1,682/month',
        shipping: 'Ships in 5 days',
        quantity: 6
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/l/e/1100x1210/leather-recliner-in-brown-colour-by-trendyol-leather-recliner-in-brown-colour-by-trendyol-9lolam.jpg',
        alt: 'Leather Recliner',
        title: 'Leather Recliner',
        Amount: 28999,
        description: 'Genuine leather recliner with footrest',
        brand: 'By Trendyol',
        rating: 4.7,
        discount: '30% OFF',
        emi: 'EMI starting from ₹1,394/month',
        shipping: 'Express Shipping in 2 days',
        quantity: 11
      },
      {
        id: 4,
        src: 'assets/images/default-recliner.jpg',
        alt: 'Basic Recliner',
        title: 'Basic Recliner',
        Amount: 12999,
        description: 'Simple and comfortable recliner chair',
        brand: 'By Casacraft',
        rating: 4.4,
        discount: '25% OFF',
        emi: 'EMI starting from ₹625/month',
        shipping: 'Same Day Delivery',
        quantity: 25
      }
    ];

    
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }


}
