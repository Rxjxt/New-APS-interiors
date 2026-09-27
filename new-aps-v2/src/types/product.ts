export interface Product {
  _id: string;

  name: string;

  price: number;

  gst: number;

  unit: string;

  category: {
    _id: string;
    name: string;
  };
}