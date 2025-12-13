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
      route: '/items/study',
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





    this.products = [
      {
        id: 1,
        name: "Modern Sofa Set",
        category: "Living Room",
        price: 599.99,
        oldPrice: 699.99,
        description: "Comfortable and stylish sofa perfect for your living room with premium fabric and cushioning.",
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop",
        badge: "15% OFF"
      },
      {
        id: 2,
        name: "Queen Size Bed",
        category: "Bedroom",
        price: 899.99,
        oldPrice: 999.99,
        description: "Elegant bed frame with built-in storage options and premium wooden finish for a luxurious look.",
        imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop",
        badge: "New Arrival"
      },
      {
        id: 3,
        name: "Dining Table Set",
        category: "Dining Room",
        price: 749.99,
        oldPrice: 829.99,
        description: "Perfect for family dinners and gatherings. Includes 6 chairs and extendable table for flexibility.",
        imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop",
        badge: "10% OFF"
      },
      {
        id: 4,
        name: "Ergonomic Study Table",
        category: "Office & Study",
        price: 299.99,
        description: "Modern study table with cable management and adjustable height for comfortable working.",
        imageUrl: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=500&auto=format&fit=crop",
        badge: "Best Seller"
      },
      {
        id: 5,
        name: "Glass Centre Table",
        category: "Living Room",
        price: 199.99,
        description: "Elegant glass top centre table with wooden base, perfect for modern living rooms.",
        imageUrl: "https://images.unsplash.com/photo-1567016526105-22da6c3fadf1?w=500&auto=format&fit=crop",
        badge: "15% OFF"
      },
      {
        id: 6,
        name: "Leather Recliner Chair",
        category: "Living Room",
        price: 449.99,
        description: "Premium leather recliner with massage function and adjustable positions for ultimate comfort.",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop",
        badge: "Premium"
      },
      {
        id: 7,
        name: "L-Shaped Sectional Sofa",
        category: "Living Room",
        price: 1299.99,
        oldPrice: 1599.99,
        description: "Spacious L-shaped sectional sofa with chaise lounge, perfect for family gatherings.",
        imageUrl: "https://images.unsplash.com/photo-1567016520491-6b8e5bb5f7c2?w=500&auto=format&fit=crop",
        badge: "20% OFF"
      },
      {
        id: 8,
        name: "Sliding Door Wardrobe",
        category: "Bedroom",
        price: 799.99,
        description: "Modern sliding door wardrobe with mirror finish and ample storage space.",
        imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&auto=format&fit=crop",
        badge: "Best Seller"
      },
      {
        id: 9,
        name: "Italian Luxury Sofa",
        category: "Premium",
        price: 2499.99,
        description: "Handcrafted Italian leather sofa with premium wood frame and gold accents.",
        imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop",
        badge: "Luxury"
      },
      {
        id: 10,
        name: "Executive Office Desk",
        category: "Office",
        price: 599.99,
        description: "Professional office desk with built-in drawers, cable management, and durable finish.",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop",
        badge: "Office"
      },
      {
        id: 11,
        name: "Multi-Layer Shoe Rack",
        category: "Storage",
        price: 89.99,
        description: "Space-saving shoe rack with 5 tiers, can hold up to 30 pairs of shoes.",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop",
        badge: "Storage"
      },
      {
        id: 12,
        name: "TV Cabinet & Sideboard",
        category: "Living Room",
        price: 449.99,
        description: "Modern TV cabinet with sideboard, perfect for organizing media equipment and storage.",
        imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop",
        badge: "Storage"
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
