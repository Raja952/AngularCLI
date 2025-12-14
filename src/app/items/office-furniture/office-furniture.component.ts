import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-furniture',
  templateUrl: './office-furniture.component.html',
  styleUrls: ['./office-furniture.component.css']
})
export class OfficeFurnitureComponent implements OnInit  {

  officeFurniture: any;
  loading: boolean = false;
  error: string = '';


  ngOnInit(): void {
    this.loadSampleData();

  }


  // In your office-furniture.component.ts
  loadSampleData(): void {
    this.officeFurniture = [
      {
        id: 1,
        title: 'Executive Office Desk',
        description: 'Premium executive desk with built-in drawers and cable management',
        src: 'https://ii1.pepperfry.com/media/catalog/product/e/x/1100x1210/executive-office-desk-in-walnut-finish-by-woodsworth-executive-office-desk-in-walnut-finish-by-wood-7d09n2.jpg',
        Amount: 24999,
        discount: '30% OFF',
        brand: 'By Woodsworth',
        rating: 4.7,
        emi: 'EMI starting from ₹1,201/month',
        shipping: 'Free Shipping',
        quantity: 8,
        maxQuantity: 2
      },
      {
        id: 2,
        title: 'Ergonomic Office Chair',
        description: 'Comfortable ergonomic chair with lumbar support and adjustable height',
        src: 'https://ii1.pepperfry.com/media/catalog/product/e/r/1100x1210/ergonomic-office-chair-in-black-colour-by-trendyol-ergonomic-office-chair-in-black-colour-by-trendy-6lw5q0.jpg',
        Amount: 12999,
        discount: '25% OFF',
        brand: 'By Trendyol',
        rating: 4.8,
        emi: 'EMI starting from ₹625/month',
        shipping: 'Express Shipping in 1 day',
        quantity: 15,
        maxQuantity: 4
      },
      {
        id: 3,
        title: 'Conference Table',
        description: 'Large conference table for meetings with premium finish',
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/o/1100x1210/conference-table-in-walnut-finish-by-woodsworth-conference-table-in-walnut-finish-by-woodsworth-wckti8.jpg',
        Amount: 45999,
        discount: '35% OFF',
        brand: 'By Woodsworth',
        rating: 4.6,
        emi: 'EMI starting from ₹2,211/month',
        shipping: 'Ships in 5 days',
        quantity: 3,
        maxQuantity: 1
      },
      {
        id: 4,
        title: 'Office Storage Cabinet',
        description: 'File storage cabinet with lock and multiple drawers',
        src: 'https://ii1.pepperfry.com/media/catalog/product/o/f/1100x1210/office-storage-cabinet-in-walnut-finish-by-woodsworth-office-storage-cabinet-in-walnut-finish-by-woo-s0r0dy.jpg',
        Amount: 18999,
        discount: '20% OFF',
        brand: 'By Woodsworth',
        rating: 4.5,
        emi: 'EMI starting from ₹913/month',
        shipping: 'Free Assembly',
        quantity: 12,
        maxQuantity: 3
      },
      {
        id: 5,
        title: 'Visitor Chairs Set',
        description: 'Set of 4 visitor chairs for office reception',
        src: 'https://ii1.pepperfry.com/media/catalog/product/v/i/1100x1210/visitor-chairs-set-in-black-colour-by-trendyol-visitor-chairs-set-in-black-colour-by-trendyol-y5tdgq.jpg',
        Amount: 21999,
        discount: '40% OFF',
        brand: 'By Trendyol',
        rating: 4.4,
        emi: 'EMI starting from ₹1,057/month',
        shipping: 'Same Day Delivery',
        quantity: 10,
        maxQuantity: 2
      },
      {
        id: 6,
        title: 'Office Workstation',
        description: 'Complete workstation with desk and storage units',
        src: 'https://ii1.pepperfry.com/media/catalog/product/o/f/1100x1210/office-workstation-in-walnut-finish-by-woodsworth-office-workstation-in-walnut-finish-by-woodsworth-96qk0o.jpg',
        Amount: 34999,
        discount: '15% OFF',
        brand: 'By Woodsworth',
        rating: 4.9,
        emi: 'EMI starting from ₹1,682/month',
        shipping: 'Free Installation',
        quantity: 5,
        maxQuantity: 1
      },
      {
        id: 7,
        title: 'Office Sofa Set',
        description: 'Comfortable sofa set for office lounge area',
        src: 'https://ii1.pepperfry.com/media/catalog/product/o/f/1100x1210/office-sofa-set-in-grey-colour-by-trendyol-office-sofa-set-in-grey-colour-by-trendyol-6g5bte.jpg',
        Amount: 28999,
        discount: 'Best Seller',
        brand: 'By Trendyol',
        rating: 4.7,
        emi: 'EMI starting from ₹1,394/month',
        shipping: 'Express Shipping in 2 days',
        quantity: 7,
        maxQuantity: 2
      },
      {
        id: 8,
        title: 'Office Bookshelf',
        description: 'Modern bookshelf for office library and storage',
        src: 'assets/images/default-office.jpg',
        Amount: 15999,
        discount: '10% OFF',
        brand: 'By Casacraft',
        rating: 4.3,
        emi: 'EMI starting from ₹769/month',
        shipping: 'Ships in 3 days',
        quantity: 20,
        maxQuantity: 5
      }
    ];
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }

}
