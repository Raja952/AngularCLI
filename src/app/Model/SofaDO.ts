// interfaces/sofa.interface.ts
 
 export interface Sofa {
  id: number;
  name: string;
  description: string;
  price: number;
  material: string;
  color: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  seats: number;
  isAvailable: boolean;
  category: string;
  sku: string;
  rating?: number;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}
