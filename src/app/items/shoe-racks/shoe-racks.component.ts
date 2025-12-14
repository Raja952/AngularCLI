import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoe-racks',
  templateUrl: './shoe-racks.component.html',
  styleUrls: ['./shoe-racks.component.css']
})
export class ShoeRacksComponent implements OnInit {

  shoeRacks: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }


  loadSampleData(): void {
    this.shoeRacks = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/h/1100x1210/shoe-rack-in-walnut-finish-by-woodsworth-shoe-rack-in-walnut-finish-by-woodsworth-npx9v0.jpg',
        alt: 'Wooden Shoe Rack',
        title: 'Wooden Shoe Rack',
        Amount: 4999,
        description: 'Multi-layer wooden shoe rack with storage',
        brand: 'By Woodsworth',
        rating: 4.5,
        discount: '30% OFF',
        emi: 'EMI starting from ₹240/month',
        shipping: 'Free Shipping',
        quantity: 35
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/h/1100x1210/shoe-rack-in-walnut-finish-by-woodsworth-shoe-rack-in-walnut-finish-by-woodsworth-gutpc8.jpg',
        alt: 'Metal Shoe Rack',
        title: 'Metal Shoe Rack',
        Amount: 2999,
        description: 'Space-saving metal shoe rack',
        brand: 'By Casacraft',
        rating: 4.2,
        discount: '25% OFF',
        emi: 'EMI starting from ₹144/month',
        shipping: 'Same Day Delivery',
        quantity: 50
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/f/o/1100x1210/folding-shoe-rack-in-black-colour-by-casacraft-folding-shoe-rack-in-black-colour-by-casacraft-5lvz4v.jpg',
        alt: 'Folding Shoe Rack',
        title: 'Folding Shoe Rack',
        Amount: 1999,
        description: 'Portable folding shoe rack',
        brand: 'By Casacraft',
        rating: 4.4,
        discount: '20% OFF',
        emi: 'EMI starting from ₹96/month',
        shipping: 'Express Shipping in 1 day',
        quantity: 45
      },
      {
        id: 4,
        src: 'assets/images/default-shoe-rack.jpg',
        alt: 'Plastic Shoe Rack',
        title: 'Plastic Shoe Rack',
        Amount: 1499,
        description: 'Lightweight plastic shoe rack',
        brand: 'By Pepperfry',
        rating: 4.0,
        discount: '15% OFF',
        emi: 'EMI starting from ₹72/month',
        shipping: 'Free Shipping',
        quantity: 60
      }
    ];

    
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }


}
