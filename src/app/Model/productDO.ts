// product.model.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  imageUrl: string;
  badge?: string;
  route?: string;
  altText?: string;
}

export interface Category {
  name: string;
  imageUrl: string;
  route: string;
  altText: string;
}
