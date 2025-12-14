// beds.component.ts (simplified)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  beds: any[] = [];
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadBeds();
  }

  loadBeds(): void {
    this.loading = true;

    // Simple hardcoded data like sofa
    this.beds = [
      {
        name: 'Luxurious Solid Wood Queen Size Bed',
        description: 'Premium solid wood queen size bed with storage',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/l/u/1100x1210/lush-deluxe-queen-size-upholstered-bed-in-pastel-grey---white-colour-with-box-storage-lush-deluxe-qu-owpeym.jpg',
        price: '₹22,912',
        oldPrice: '₹42,000',
        discount: '45% OFF',
        emi: 'EMI starting from ₹1,101/month'
      },
      {
        name: 'Hoshi Queen Size Bed with Storage',
        description: 'Modern bed with box storage and headboard',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/n/a/1100x1210/namie-queen-size-bed-in-wenge-colour-with-box-storage-namie-queen-size-bed-in-wenge-colour-with-box--elkpaq.jpg',
        price: '₹16,999',
        oldPrice: '₹25,186',
        discount: '33% OFF',
        emi: 'EMI starting from ₹817/month'
      },
      {
        name: 'Elevate Queen Size Bed',
        description: 'Classic oak melamine finish bed',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/s/e/1100x1210/segur-sheesham-wood-king-size-bed-in-provincial-teak-finish-with-hydraulic-storage-segur-sheesham-wo-scycux.jpg',
        price: '₹23,999',
        oldPrice: '₹40,176',
        discount: '40% OFF',
        emi: 'EMI starting from ₹1,153/month'
      },
      {
        name: 'King Size Bed in Honey Oak Finish',
        description: 'Scratch resistant honey oak finish',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/k/o/1100x1210/kosmo-jude-king-size-bed-in-sheesham-finish-with-box-storage-kosmo-jude-king-size-bed-in-sheesham-fi-mot2tk.jpg',
        price: '₹27,999',
        oldPrice: '₹38,999',
        discount: '28% OFF',
        emi: 'EMI starting from ₹1,345/month'
      }
    ];

    this.loading = false;
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }
}
