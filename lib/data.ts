export type MeatType = "Res" | "Cerdo" | "Pollo" | "Embutidos" | "Complementos";

export interface Product {
  name: string;
  image: string;
  meat_type: MeatType;
}

export const PRODUCTS: Product[] = [
  // RES
  {
    name: "Carne para Guisar de Res",
    image: "/products/carne_para_guisar_de_res.jpg",
    meat_type: "Res",
  },
  {
    name: "Chuleta de Res",
    image: "/products/chuleta_res.jpg",
    meat_type: "Res",
  },
  {
    name: "Carne Molida",
    image: "/products/carne_molida.jpg",
    meat_type: "Res",
  },
  {
    name: "Carne Molida de Res Súper Especial",
    image: "/products/carne_molida_de_res_super_especial.jpg",
    meat_type: "Res",
  },
  {
    name: "Carne Molida Especial de Res",
    image: "/products/carne_molida_especial_de_red .jpg",
    meat_type: "Res",
  },
  {
    name: "Chocozuela",
    image: "/products/chocozuela.jpg",
    meat_type: "Res",
  },
  {
    name: "Hueso para Sopa de Res",
    image: "/products/hueso_para_sopa_de_Res.jpg",
    meat_type: "Res",
  },

  // CERDO
  {
    name: "Chuleta Ahumada de Cerdo",
    image: "/products/chuleta_ahumada_de_cerdo.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Chuleta de Cerdo Progcarne",
    image: "/products/chuleta_de_cerdo_progcarne.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Costilla Ahumada de Cerdo",
    image: "/products/costilla_en_cubos_ahumada_de_cerdo.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Costilla de Cerdo en Cubos Progcarne",
    image: "/products/costilla_de_cerdo_en_cubos_progcarne.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Costilla de Cerdo Full",
    image: "/products/costilla_de_cerdo_full.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Patas de Cerdo",
    image: "/products/patas_de_cerdo.jpg",
    meat_type: "Cerdo",
  },
  {
    name: "Pierna de Cerdo",
    image: "/products/pierna_de_cerdo.jpg",
    meat_type: "Cerdo",
  },

  // POLLO
  {
    name: "Pollo Entero",
    image: "/products/pollo_entero.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Pollo Gallina",
    image: "/products/pollo_gallina.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Pechuga de Pollo",
    image: "/products/pechuga_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Pechugas de Pollo",
    image: "/products/pechugas_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Pierna de Pollo",
    image: "/products/pierna_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Alitas de Pollo",
    image: "/products/alitas_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Carcasas de Pollo",
    image: "/products/carcasas_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Mollejas de Pollo",
    image: "/products/mollejas_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Menudos de Pollo",
    image: "/products/menudos_de_pollo.jpg",
    meat_type: "Pollo",
  },
  {
    name: "Patas de Pollo",
    image: "/products/patas_de_pollo.jpg",
    meat_type: "Pollo",
  },

  // EMBUTIDOS
  {
    name: "Choripollo Jarral",
    image: "/products/choripollo_jarral.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Chorizo Barbacoa Delicia (Grande)",
    image: "/products/chorizo_barbacoa_delicia_grande.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Chorizo Barbacoa Delicia (Libra)",
    image: "/products/chorizo_barbacoa_delicia_libra.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Chorizo Cervecero Long",
    image: "/products/chorizo_cervecero_long.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Parrillero Jarral",
    image: "/products/parrillero_jarral.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Hotdog del Queso Delicia (Libra)",
    image: "/products/hotdog_de_queso_delicia_libra.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Hotdog Delicia Grande",
    image: "/products/hotdog_delicia_grande.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Hotdog de Pollo Delicia",
    image: "/products/hotdog_pollo_delicia.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Big Dog Delicia",
    image: "/products/bigdog_delicia.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Longaniza Kimby Grande",
    image: "/products/longaniza_kimby_grande.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Media de Jamón Rebanadas",
    image: "/products/media_de_jamón_rebanadas.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Mortadela Picante (Medias)",
    image: "/products/mortadela_picante_medias.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Mortadela Media",
    image: "/products/motadela_media.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Rollo Mortadela Delicia",
    image: "/products/rollo_mortadela_delicia.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Rollo Mortadela Picante",
    image: "/products/rollo_mortadela_picante.jpg",
    meat_type: "Embutidos",
  },
  {
    name: "Rollo Mortadela",
    image: "/products/rollo_motadela.jpg",
    meat_type: "Embutidos",
  },

  // COMPLEMENTOS
  {
    name: "Frijoles",
    image: "/products/frijoles.jpg",
    meat_type: "Complementos",
  },
  {
    name: "Papas",
    image: "/products/papas.jpg",
    meat_type: "Complementos",
  },
];
