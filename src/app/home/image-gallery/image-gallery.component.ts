import { Component } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {

  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Art Deco',
      category: 'Home Decoration',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop',
      description: 'Classic Art Deco style decoration pieces'
    },
    {
      id: 2,
      title: 'Helen Chair',
      category: 'Decoration',
      imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w-800&auto=format&fit=crop',
      description: 'Elegant Helen design chair'
    },
    {
      id: 3,
      title: 'Vase Of Flowers',
      category: 'Decoration',
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop',
      description: 'Beautiful floral arrangement in vase'
    },
    {
      id: 4,
      title: 'Wood Eggs',
      category: 'Decoration',
      imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop',
      description: 'Handcrafted wooden egg decorations'
    },
    {
      id: 5,
      title: 'Table Wood Pine',
      category: 'Furniture',
      imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop',
      description: 'Premium pine wood table'
    },
    {
      id: 6,
      title: 'Woodex Store',
      category: 'Furniture Store',
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop',
      description: 'Premium furniture store collection'
    }
  ];

  categories = ['All', 'Decoration', 'Furniture', 'Home Decoration'];
  selectedCategory = 'All';

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredItems(): GalleryItem[] {
    if (this.selectedCategory === 'All') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item =>
      item.category.toLowerCase().includes(this.selectedCategory.toLowerCase())
    );
  }
}
