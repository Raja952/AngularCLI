import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wardrobes',
  templateUrl: './wardrobes.component.html',
  styleUrls: ['./wardrobes.component.css']
})
export class WardrobesComponent implements OnInit {
  wardrobes: any;
  loading: boolean = false;
  error: string = '';


  ngOnInit(): void {
    this.loadSampleData();
  }

  loadSampleData(): void {
    this.wardrobes = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/l/1100x1210/sliding-door-wardrobe-in-wenge-colour-by-woodsworth-sliding-door-wardrobe-in-wenge-colour-by-woodswor-ik8gn1.jpg',
        alt: 'Sliding Door Wardrobe',
        title: 'Sliding Door Wardrobe',
        Amount: 34999,
        description: 'Modern sliding door wardrobe with mirror',
        brand: 'By Woodsworth',
        rating: 4.6,
        discount: '35% OFF',
        emi: 'EMI starting from ₹1,682/month',
        shipping: 'Free Assembly',
        quantity: 8
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/w/a/1100x1210/wardrobe-in-walnut-finish-by-woodsworth-wardrobe-in-walnut-finish-by-woodsworth-zb8wq1.jpg',
        alt: 'Wooden Wardrobe',
        title: 'Wooden Wardrobe',
        Amount: 42999,
        description: 'Solid wood wardrobe with multiple compartments',
        brand: 'By Woodsworth',
        rating: 4.7,
        discount: '30% OFF',
        emi: 'EMI starting from ₹2,067/month',
        shipping: 'Ships in 7 days',
        quantity: 5
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/w/a/1100x1210/wardrobe-with-mirror-in-walnut-finish-by-woodsworth-wardrobe-with-mirror-in-walnut-finish-by-woodswor-l9j8ks.jpg',
        alt: 'Wardrobe with Mirror',
        title: 'Wardrobe with Mirror',
        Amount: 38999,
        description: 'Full length mirror wardrobe for bedrooms',
        brand: 'By Woodsworth',
        rating: 4.5,
        discount: '25% OFF',
        emi: 'EMI starting from ₹1,875/month',
        shipping: 'Free Shipping',
        quantity: 12
      },
      {
        id: 4,
        src: 'assets/images/default-wardrobe.jpg',
        alt: 'Basic Wardrobe',
        title: 'Basic Wardrobe',
        Amount: 24999,
        description: 'Simple and functional wardrobe',
        brand: 'By Casacraft',
        rating: 4.3,
        discount: '20% OFF',
        emi: 'EMI starting from ₹1,201/month',
        shipping: 'Express Shipping in 3 days',
        quantity: 20
      }
    ];

   
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }


}
