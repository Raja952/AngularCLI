import { Component } from '@angular/core';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
  route: string;
}

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.css']
})
export class CategoryGridComponent {
  categories: Category[] = [
    { id: 1, name: 'Sofas', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_1.jpg', route: '/items/sofa' },
    { id: 2, name: 'Beds', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_2.jpg', route: '/items/beds' },
    { id: 3, name: 'Dining Sets', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_3.jpg', route: '/items/dinning-seats' },
    { id: 4, name: 'Study Tables', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_4.jpg', route: '/items/study-tables' },
    { id: 5, name: 'Centre Tables', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_5.jpg', route: '/items/centre-tables' },
    { id: 6, name: 'Recliners', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_6.jpg', route: '/items/recliners' },
    { id: 7, name: 'Sectional Sofas', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_7.jpg', route: '/items/sectional-sofas' },
    { id: 8, name: 'Wardrobes', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_8.jpg', route: '/items/wardrobes' },
    { id: 9, name: 'Luxury Furniture', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Furnitureclp_02072024_360_38.jpg', route: '/items/luxury-furniture' },
    { id: 10, name: 'Office Furniture', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_10.jpg', route: '/items/office-furniture' },
    { id: 11, name: 'Shoe Racks', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_11.jpg', route: '/items/shoe-racks' },
    { id: 12, name: 'Cabinets & Sideboards', imageUrl: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Frame_360_14062024_9.jpg', route: '/items/cabinets-sideboards' }
  ];
}
