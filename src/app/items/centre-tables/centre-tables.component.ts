import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centre-tables',
  templateUrl: './centre-tables.component.html',
  styleUrls: ['./centre-tables.component.css']
})
export class CentreTablesComponent implements OnInit {
  centreTables: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }

   
  loadSampleData(): void {
    this.centreTables = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/e/1100x1210/centre-table-in-walnut-finish-by-woodsworth-centre-table-in-walnut-finish-by-woodsworth-ib0mfm.jpg',
        alt: 'Wooden Centre Table',
        title: 'Wooden Centre Table',
        Amount: 8999,
        description: 'Solid wood centre table with storage',
        brand: 'By Woodsworth',
        rating: 4.5,
        discount: '25% OFF',
        emi: 'EMI starting from ₹432/month',
        shipping: 'Free Shipping',
        quantity: 22
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/g/l/1100x1210/glass-centre-table-in-walnut-finish-by-woodsworth-glass-centre-table-in-walnut-finish-by-woodsworth-1pvsyt.jpg',
        alt: 'Glass Centre Table',
        title: 'Glass Centre Table',
        Amount: 12999,
        description: 'Tempered glass centre table with wooden base',
        brand: 'By Woodsworth',
        rating: 4.3,
        discount: '20% OFF',
        emi: 'EMI starting from ₹625/month',
        shipping: 'Same Day Delivery',
        quantity: 18
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/n/e/1100x1210/nesting-centre-tables-in-walnut-finish-by-woodsworth-nesting-centre-tables-in-walnut-finish-by-woodsw-1zgm9o.jpg',
        alt: 'Nesting Centre Tables',
        title: 'Nesting Centre Tables',
        Amount: 14999,
        description: 'Set of 3 nesting tables for flexible use',
        brand: 'By Woodsworth',
        rating: 4.6,
        discount: '30% OFF',
        emi: 'EMI starting from ₹721/month',
        shipping: 'Ships in 2 days',
        quantity: 14
      },
      {
        id: 4,
        src: 'assets/images/default-centre-table.jpg',
        alt: 'Modern Centre Table',
        title: 'Modern Centre Table',
        Amount: 7999,
        description: 'Contemporary design centre table for living room',
        brand: 'By Casacraft',
        rating: 4.2,
        discount: '15% OFF',
        emi: 'EMI starting from ₹384/month',
        shipping: 'Express Shipping in 1 day',
        quantity: 30
      }
    ];

    
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }


}
