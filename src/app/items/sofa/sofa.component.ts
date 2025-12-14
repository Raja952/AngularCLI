import { Component, OnInit } from '@angular/core';
import { Sofa } from '../../Model/items/SofaDO';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent implements OnInit {
  // Use consistent naming - camelCase is standard in TypeScript
  sofaList: Sofa[] = [];
  loading = false;
  error = '';

  constructor() { }

  ngOnInit(): void {
    this.loadSofas();
  }

  loadSofas(): void {
    this.loading = true;

    // Load your sofa data - note the property names match your Sofa interface
    this.sofaList = [
      {
        id: 1,
        name: 'Shoe Rack in Beige Colour',
        price: 1,
        originalPrice: 1410,
        discount: 47,
        quantity: 1,
        maxQuantity: 5,
        description: 'By Prima (6 Months\' Warranty)',
        imageUrl: 'https://storage.googleapis.com/a1aa/image/wbMPMGzUbjY8A14omQeRIjWixONmsSHYD7CsITAevEgLYcmTA.jpg'
      },
      {
        id: 2,
        name: 'Classic Wooden Sofa',
        price: 200,
        originalPrice: 300,
        discount: 33,
        quantity: 1,
        maxQuantity: 3,
        description: 'Classic style with durable wood',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/g/r/494x544/grane-sheesham-wood-2-seater-sofa-in-provincial-teak-finish-grane-sheesham-wood-2-seater-sofa-in-pro-rrcdij.jpg'
      },
      {
        id: 3,
        name: 'Navy Blue Luxury Sofa',
        price: 300,
        originalPrice: 500,
        discount: 40,
        quantity: 1,
        maxQuantity: 4,
        description: 'Elegant navy blue sofa for modern interiors',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-navy-blue-colour-andres-fabric-2-seater-sofa-in-navy-blue-colour-fwx6u7.jpg'
      },
      {
        id: 4,
        name: '1-Seater Wooden Sofa',
        price: 400,
        originalPrice: 550,
        discount: 27,
        quantity: 1,
        maxQuantity: 2,
        description: 'Compact 1-seater sofa with premium finish',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/g/r/494x544/grane-sheesham-wood-1-seater-sofa-in-provincial-teak-finish-grane-sheesham-wood-1-seater-sofa-in-pro-dke2jc.jpg'
      },
      {
        id: 5,
        name: 'Steel Grey Velvet Sofa',
        price: 500,
        originalPrice: 650,
        discount: 23,
        quantity: 1,
        maxQuantity: 3,
        description: 'Luxurious steel grey velvet 2-seater',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/v/o/494x544/volkach-velvet-2-seater-sofa-in-steel-grey-colour-volkach-velvet-2-seater-sofa-in-steel-grey-colour-ucbwg5.jpg'
      },
      {
        id: 6,
        name: 'Ash Grey Sofa',
        price: 600,
        originalPrice: 800,
        discount: 25,
        quantity: 1,
        maxQuantity: 3,
        description: 'Modern ash grey fabric 2-seater',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/a/n/494x544/andres-fabric-2-seater-sofa-in-ash-grey-colour-andres-fabric-2-seater-sofa-in-ash-grey-colour-mqfga5.jpg'
      },
      {
        id: 7,
        name: 'Blush Pink Velvet Sofa',
        price: 700,
        originalPrice: 900,
        discount: 22,
        quantity: 1,
        maxQuantity: 2,
        description: 'Chic blush pink velvet 1-seater',
        imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/k/a/494x544/kaylee-velvet-1-seater-sofa-in-blush-pink-colour-kaylee-velvet-1-seater-sofa-in-blush-pink-colour-q0x71u.jpg'
      }
    ];

    this.loading = false;
  }

  // Add the checkout method that you referenced in HTML
  checkOutPage(sofa: Sofa): void {
    console.log('Checkout for sofa:', sofa);
    // Add your checkout logic here
    // Example:
    // const sofaData = JSON.stringify(sofa);
    // const url = "../Iteams/SofaCheckout?Identity=" + $("#hdnSessionId").val() + "&SofaData=" + encodeURIComponent(sofaData);
    // window.open(url, "SofaCheckout");
  }
}
