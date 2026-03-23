export type MeatType = 'Res' | 'Cerdo' | 'Pollo' | 'Cordero' | 'Mixto';

export interface Product {
  name: string;
  image: string;
  meat_type: MeatType | string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Corte de Res Premium",
    image: "/next.svg", // Placeholder, user will replace
    meat_type: "Res"
  },
  {
    name: "Chuletón de Cerdo",
    image: "/next.svg",
    meat_type: "Cerdo"
  },
  {
    name: "Pechuga de Pollo",
    image: "/next.svg",
    meat_type: "Pollo"
  },
  {
    name: "Cordero al Horno",
    image: "/next.svg",
    meat_type: "Cordero"
  },
  {
    name: "Salchicha Especial",
    image: "/next.svg",
    meat_type: "Mixto"
  }
];
