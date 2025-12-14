import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxury-furniture',
  templateUrl: './luxury-furniture.component.html',
  styleUrls: ['./luxury-furniture.component.css']
})
export class LuxuryFurnitureComponent implements OnInit {

  luxuryFurniture: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }


  // In your luxury-furniture.component.ts
  loadSampleData(): void {
    this.luxuryFurniture = [
      {
        id: 1,
        title: 'Italian Leather King Size Bed',
        description: 'Handcrafted Italian leather bed with premium wooden frame and gold accents',
        src: 'https://ii1.pepperfry.com/media/catalog/product/i/t/1100x1210/italian-leather-king-size-bed-in-brown-colour-by-trendyol-italian-leather-king-size-bed-in-brown-c-6z9jgy.jpg',
        Amount: 89999,
        discount: 'Premium',
        brand: 'By Italian Design Studio',
        rating: 4.9,
        emi: 'EMI starting from ₹4,327/month',
        shipping: 'White Glove Delivery',
        quantity: 2,
        maxQuantity: 1,
        badge: 'Premium'
      },
      {
        id: 2,
        title: 'Crystal Chandelier Dining Table',
        description: 'Crystal embedded dining table with premium glass top and gold plated legs',
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/r/1100x1210/crystal-chandelier-dining-table-in-gold-colour-by-trendyol-crystal-chandelier-dining-table-in-gol-8q3kft.jpg',
        Amount: 129999,
        discount: 'Luxury',
        brand: 'By Crystal Palace',
        rating: 5.0,
        emi: 'EMI starting from ₹6,250/month',
        shipping: 'Premium Installation',
        quantity: 1,
        maxQuantity: 1,
        badge: 'Luxury'
      },
      {
        id: 3,
        title: 'Hand-Carved Wooden Sofa Set',
        description: 'Exquisite hand-carved wooden sofa set with velvet upholstery',
        src: 'https://ii1.pepperfry.com/media/catalog/product/h/a/1100x1210/hand-carved-wooden-sofa-set-in-gold-colour-by-trendyol-hand-carved-wooden-sofa-set-in-gold-colour--7p5nzj.jpg',
        Amount: 189999,
        discount: 'Exclusive',
        brand: 'By Royal Woodcraft',
        rating: 4.9,
        emi: 'EMI starting from ₹9,135/month',
        shipping: 'Professional Assembly',
        quantity: 1,
        maxQuantity: 1,
        badge: 'Exclusive'
      },
      {
        id: 4,
        title: 'Marble Top Center Table',
        description: 'Italian marble top center table with brass inlay work',
        src: 'https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/marble-top-center-table-in-white-colour-by-trendyol-marble-top-center-table-in-white-colour-by-tren-4r9qdl.jpg',
        Amount: 59999,
        discount: '25% OFF',
        brand: 'By Marble Artisans',
        rating: 4.8,
        emi: 'EMI starting from ₹2,885/month',
        shipping: 'Careful Handling',
        quantity: 3,
        maxQuantity: 1
      },
      {
        id: 5,
        title: 'Velvet Recliner Chair',
        description: 'Premium velvet recliner with massage function and gold detailing',
        src: 'https://ii1.pepperfry.com/media/catalog/product/v/e/1100x1210/velvet-recliner-chair-in-emerald-green-colour-by-trendyol-velvet-recliner-chair-in-emerald-green-co-9z8hxp.jpg',
        Amount: 79999,
        discount: 'Premium',
        brand: 'By Luxury Comfort',
        rating: 4.9,
        emi: 'EMI starting from ₹3,846/month',
        shipping: 'Premium Packaging',
        quantity: 4,
        maxQuantity: 2,
        badge: 'Premium'
      },
      {
        id: 6,
        title: 'Antique Wooden Wardrobe',
        description: 'Antique finish wooden wardrobe with brass handles and mirror',
        src: 'https://ii1.pepperfry.com/media/catalog/product/a/n/1100x1210/antique-wooden-wardrobe-in-brown-colour-by-trendyol-antique-wooden-wardrobe-in-brown-colour-by-tren-5f7jky.jpg',
        Amount: 109999,
        discount: 'Heritage',
        brand: 'By Antique Collection',
        rating: 4.8,
        emi: 'EMI starting from ₹5,288/month',
        shipping: 'Special Handling Required',
        quantity: 2,
        maxQuantity: 1,
        badge: 'Heritage'
      },
      {
        id: 7,
        title: 'Crystal Display Cabinet',
        description: 'French style crystal display cabinet for art and collectibles',
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/r/1100x1210/crystal-display-cabinet-in-gold-colour-by-trendyol-crystal-display-cabinet-in-gold-colour-by-tren-2z6mfy.jpg',
        Amount: 69999,
        discount: 'Premium',
        brand: 'By French Designs',
        rating: 4.9,
        emi: 'EMI starting from ₹3,365/month',
        shipping: 'Glass Special Handling',
        quantity: 3,
        maxQuantity: 1,
        badge: 'Premium'
      },
      {
        id: 8,
        title: 'Designer Bookshelf',
        description: 'Contemporary designer bookshelf with ambient lighting',
        src: 'assets/images/default-luxury.jpg',
        Amount: 45999,
        discount: '20% OFF',
        brand: 'By Design Studio',
        rating: 4.7,
        emi: 'EMI starting from ₹2,211/month',
        shipping: 'Premium Installation',
        quantity: 5,
        maxQuantity: 2
      }
    ];
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }

}
