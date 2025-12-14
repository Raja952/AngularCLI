// sofa.model.ts
export interface Sofa {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  quantity: number;
  maxQuantity: number;
  description: string;
  imageUrl: string;
  category?: string; // Optional: if you want to add category
}
