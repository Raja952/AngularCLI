// models/bed.model.ts
export interface Bed {
  // These match your XML
  img?: string;
  title?: string;
  brand?: string;
  rating?: string | number;
  price?: string;
  oldPrice?: string;
  discount?: string;
  emi?: string;
  shipping?: string;
  badge?: string;
  assured?: boolean;

  // These match your HTML template
  id?: number;
  name?: string;
  description?: string;
  imageUrl?: string;
  originalPrice?: number;
  quantity?: number;
  maxQuantity?: number;
}
