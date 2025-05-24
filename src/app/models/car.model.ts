export interface ICar {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  image: string;
  description: string;
  available: boolean;
  mileage: number;
  featured?: boolean;
}
