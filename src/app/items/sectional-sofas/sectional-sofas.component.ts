import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectional-sofas',
  templateUrl: './sectional-sofas.component.html',
  styleUrls: ['./sectional-sofas.component.css']
})
export class SectionalSofasComponent implements OnInit {

  sectionalSofas: any;
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loadSampleData();

  }


  loadSampleData(): void {
    this.sectionalSofas = [
      {
        id: 1,
        src: 'https://ii1.pepperfry.com/media/catalog/product/l/-/1100x1210/l-shaped-sectional-sofa-in-grey-colour-by-trendyol-l-shaped-sectional-sofa-in-grey-colour-by-trendyol-ioywgd.jpg',
        alt: 'L-Shaped Sectional Sofa',
        title: 'Modern L-Shaped Sectional Sofa',
        Amount: 45999,
        description: 'Spacious L-shaped sectional sofa with chaise lounge, perfect for family gatherings and entertainment rooms',
        brand: 'By Trendyol',
        rating: 4.8,
        discount: '40% OFF',
        emi: 'EMI starting from ₹2,211/month',
        shipping: 'Free Shipping',
        quantity: 6,
        material: 'Premium Fabric',
        color: 'Grey',
        seats: '3+2 Seater',
        dimensions: '240 x 180 cm'
      },
      {
        id: 2,
        src: 'https://ii1.pepperfry.com/media/catalog/product/u/-/1100x1210/u-shaped-sectional-sofa-in-beige-colour-by-trendyol-u-shaped-sectional-sofa-in-beige-colour-by-trendyol-3hqc9k.jpg',
        alt: 'U-Shaped Sectional Sofa',
        title: 'Luxury U-Shaped Sectional Sofa',
        Amount: 68999,
        description: 'Premium U-shaped sectional sofa with premium cushioning and elegant beige finish',
        brand: 'By Trendyol',
        rating: 4.9,
        discount: '35% OFF',
        emi: 'EMI starting from ₹3,317/month',
        shipping: 'Express Shipping in 2 days',
        quantity: 3,
        material: 'Genuine Leather',
        color: 'Beige',
        seats: '4+3+2 Seater',
        dimensions: '280 x 220 cm'
      },
      {
        id: 3,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/e/1100x1210/sectional-sofa-in-blue-colour-by-trendyol-sectional-sofa-in-blue-colour-by-trendyol-01yb0n.jpg',
        alt: 'Modular Sectional Sofa',
        title: 'Modular Sectional Sofa in Blue',
        Amount: 52999,
        description: 'Modular sectional sofa that can be configured in multiple ways according to your space',
        brand: 'By Trendyol',
        rating: 4.7,
        discount: '30% OFF',
        emi: 'EMI starting from ₹2,548/month',
        shipping: 'Ships in 4 days',
        quantity: 8,
        material: 'Velvet',
        color: 'Blue',
        seats: 'Modular (Customizable)',
        dimensions: 'Customizable'
      },
      {
        id: 4,
        src: 'https://ii1.pepperfry.com/media/catalog/product/c/u/1100x1210/curved-sectional-sofa-in-grey-colour-by-trendyol-curved-sectional-sofa-in-grey-colour-by-trendyol-i5bjpq.jpg',
        alt: 'Curved Sectional Sofa',
        title: 'Curved Sectional Sofa',
        Amount: 74999,
        description: 'Elegant curved sectional sofa with premium wooden legs and deep seating comfort',
        brand: 'By Casacraft',
        rating: 4.8,
        discount: '25% OFF',
        emi: 'EMI starting from ₹3,605/month',
        shipping: 'Free Shipping & Assembly',
        quantity: 4,
        material: 'Chenille Fabric',
        color: 'Charcoal Grey',
        seats: '5 Seater',
        dimensions: '260 x 200 cm'
      },
      {
        id: 5,
        src: 'https://ii1.pepperfry.com/media/catalog/product/s/e/1100x1210/sectional-sofa-cum-bed-in-grey-colour-by-trendyol-sectional-sofa-cum-bed-in-grey-colour-by-trendyol-9pzv2v.jpg',
        alt: 'Sectional Sofa Bed',
        title: 'Sectional Sofa Cum Bed',
        Amount: 38999,
        description: 'Convertible sectional sofa that transforms into a comfortable bed for guests',
        brand: 'By Trendyol',
        rating: 4.6,
        discount: '20% OFF',
        emi: 'EMI starting from ₹1,875/month',
        shipping: 'Same Day Delivery',
        quantity: 12,
        material: 'Polyester Blend',
        color: 'Dark Grey',
        seats: '3+1 Seater',
        dimensions: '200 x 150 cm'
      },
      {
        id: 6,
        src: 'assets/images/default-sectional-sofa.jpg',
        alt: 'Basic Sectional Sofa',
        title: 'Basic L-Shaped Sectional Sofa',
        Amount: 32999,
        description: 'Affordable L-shaped sectional sofa with comfortable cushioning and modern design',
        brand: 'By Casacraft',
        rating: 4.4,
        discount: '15% OFF',
        emi: 'EMI starting from ₹1,586/month',
        shipping: 'Ships in 5 days',
        quantity: 15,
        material: 'Polyester',
        color: 'Brown',
        seats: '2+1 Seater',
        dimensions: '220 x 160 cm'
      },
      {
        id: 7,
        src: 'https://ii1.pepperfry.com/media/catalog/product/l/e/1100x1210/leather-sectional-sofa-in-black-colour-by-trendyol-leather-sectional-sofa-in-black-colour-by-trendyol-yhufkg.jpg',
        alt: 'Leather Sectional Sofa',
        title: 'Premium Leather Sectional Sofa',
        Amount: 89999,
        description: 'Luxury genuine leather sectional sofa with wooden frame and premium finishing',
        brand: 'By Trendyol',
        rating: 4.9,
        discount: 'Premium',
        emi: 'EMI starting from ₹4,327/month',
        shipping: 'Free White Glove Delivery',
        quantity: 2,
        material: 'Full Grain Leather',
        color: 'Black',
        seats: '4+3 Seater',
        dimensions: '300 x 240 cm',
        badge: 'Premium'
      },
      {
        id: 8,
        src: 'https://ii1.pepperfry.com/media/catalog/product/r/e/1100x1210/reclining-sectional-sofa-in-brown-colour-by-trendyol-reclining-sectional-sofa-in-brown-colour-by-trendyol-jxts4p.jpg',
        alt: 'Reclining Sectional Sofa',
        title: 'Reclining Sectional Sofa',
        Amount: 78999,
        description: 'Power reclining sectional sofa with USB charging ports and cup holders',
        brand: 'By Casacraft',
        rating: 4.8,
        discount: 'Best Seller',
        emi: 'EMI starting from ₹3,798/month',
        shipping: 'Free Shipping & Installation',
        quantity: 5,
        material: 'Synthetic Leather',
        color: 'Brown',
        seats: '3+2 Recliner',
        dimensions: '280 x 200 cm',
        badge: 'Best Seller'
      }
    ];

    
  }

  checkOutPage(bed: any): void {
    console.log('Checkout for:', bed);
    // Add your checkout logic here
  }

}
