import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../Model/productDO';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component'; // Import


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Use one of these, not both
  products: Product[] = [];
  categories: Category[] = [];

  ngOnInit() {
    this.initCarousel();
    this.loadProducts();
  }

  loadProducts() {

    this.categories = [
    {
      name: 'Sofas',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_1.jpg',
      route: '/items/sofa',
      altText: 'Sofa'
    },
    {
      name: 'Beds',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_2.jpg',
      route: '/items/beds',
      altText: 'Bed'
    },
    {
      name: 'Dining Sets',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_3.jpg',
      route: '/items/dinning-seats',
      altText: 'Dining Set'
    },
    {
      name: 'Study Tables',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_4.jpg',
      route: '/items/study-tables',
      altText: 'Study Table'
    },
    {
      name: 'Centre Tables',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_5.jpg',
      route: '/items/centre-tables',
      altText: 'Centre Table'
    },
    {
      name: 'Recliners',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_6.jpg',
      route: '/items/recliners',
      altText: 'Recliner'
    },
    {
      name: 'Sectional Sofas',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_7.jpg',
      route: '/items/sectional-sofas',
      altText: 'Sectional Sofa'
    },
    {
      name: 'Wardrobes',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_8.jpg',
      route: '/items/wardrobes',
      altText: 'Wardrobe'
    },
    {
      name: 'Luxury Furniture',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_02072024_360_38.jpg',
      route: '/items/luxury-furniture',
      altText: 'Luxury Furniture'
    },
    {
      name: 'Office Furniture',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_10.jpg',
      route: '/items/office-furniture',
      altText: 'Office Furniture'
    },
    {
      name: 'Shoe Racks',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_11.jpg',
      route: '/items/shoe-racks',
      altText: 'Shoe Racks'
    },
    {
      name: 'Cabinets & Sideboards',
      imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_9.jpg',
      route: '/items/cabinets-sideboards',
      altText: 'Cabinets & Sideboards'
    }
  ];
  }

  // Method to format price
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  // Method to add product to cart
  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart!`);
  }

  initCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    const updateCarousel = () => {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    };

    // Auto slide every 3 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }, 3000);

    // Manual controls
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    }
  }
}
