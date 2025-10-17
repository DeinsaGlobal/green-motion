export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface Car {
  id: string;
  brandId: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  battery: string;
  charging: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: {
    power: string;
    torque: string;
    seats: number;
    cargo: string;
    weight: string;
    dimensions: string;
  };
}

export const brands: Brand[] = [
  {
    id: "audi",
    name: "Audi",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Audi-Logo.png",
    description: "Vorsprung durch Technik - Innovación alemana en movilidad eléctrica"
  },
  {
    id: "byd",
    name: "BYD",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/BYD-Logo.png",
    description: "Líder mundial en vehículos eléctricos y baterías"
  },
  {
    id: "honda",
    name: "Honda",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Honda-Logo.png",
    description: "Tecnología japonesa al servicio de la movilidad sostenible"
  },
  {
    id: "bmw",
    name: "BMW",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    description: "Ultimate Electric Driving Machine"
  },
  {
    id: "kia",
    name: "KIA",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/KIA-Logo.png",
    description: "Movimiento que inspira - Diseño y tecnología eléctrica"
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Tesla-Logo.png",
    description: "Acelerando la transición del mundo hacia la energía sostenible"
  }
];

export const cars: Car[] = [
//Ford

{
  id: "ford-f150-lightning",
  brandId: "ford",
  brand: "Ford",
  model: "F-150 Lightning",
  year: 2024,
  price: "$55,974",
  range: "370 km",
  acceleration: "0-100 km/h en 4.4s",
  topSpeed: "180 km/h",
  battery: "131 kWh",
  charging: "150 kW DC Fast Charging",
  image: "/Imagenes/Carros/Ford/Ford-1.jpg",
  gallery: [
    "/Imagenes/Carros/Ford/Ford-1.jpg",
    "/Imagenes/Carros/Ford/Ford-2.jpg",
    "/Imagenes/Carros/Ford/Ford-3.jpg"
  ],
  description: "La pickup eléctrica más poderosa de Ford con capacidad de trabajo profesional.",
  features: [
    "Mega Power Frunk",
    "Pro Power Onboard",
    "Ford Co-Pilot360",
    "SYNC 4A",
    "Tracción 4x4 eléctrica",
    "Remolque hasta 4,500 kg"
  ],
  specs: {
    power: "563 CV",
    torque: "1,050 Nm",
    seats: 5,
    cargo: "Frunk 400 L",
    weight: "3,000 kg",
    dimensions: "5.91 x 2.03 x 1.98 m"
  }
},
  // Audi
  {
    id: "audi-e-tron-gt",
    brandId: "audi",
    brand: "Audi",
    model: "e-tron GT",
    year: 2024,
    price: "$104,900",
    range: "488 km",
    acceleration: "0-100 km/h en 3.9s",
    topSpeed: "245 km/h",
    battery: "93.4 kWh",
    charging: "270 kW DC Fast Charging",
    image: "/Imagenes/Carros/Audi/Audi-1.jpg",
    gallery: [
      "/Imagenes/Carros/Audi/Audi-1.jpg",
      "/Imagenes/Carros/Audi/Audi-2.jpg",
      "/Imagenes/Carros/Audi/Audi-3.jpg"
    ],
    description: "El Audi e-tron GT combina el diseño deportivo característico de Audi con la tecnología eléctrica más avanzada. Con su carrocería aerodinámica y su potente motor eléctrico, ofrece una experiencia de conducción emocionante sin comprometer la sostenibilidad.",
    features: [
      "Quattro electric AWD",
      "Carga rápida 270 kW",
      "Interior Premium",
      "Matrix LED",
      "Sistema de sonido Bang & Olufsen",
      "Asistente de conducción"
    ],
    specs: {
      power: "530 CV",
      torque: "640 Nm",
      seats: 4,
      cargo: "405 litros",
      weight: "2,350 kg",
      dimensions: "4.99 x 1.96 x 1.41 m"
    }
  },
  {
    id: "audi-q4-e-tron",
    brandId: "audi",
    brand: "Audi",
    model: "Q4 e-tron",
    year: 2024,
    price: "$56,900",
    range: "520 km",
    acceleration: "0-100 km/h en 6.2s",
    topSpeed: "180 km/h",
    battery: "82 kWh",
    charging: "135 kW DC Fast Charging",
    image: "/Imagenes/Carros/Audi/Audi-2.jpg",
    gallery: [
      "/Imagenes/Carros/Audi/Audi-2.jpg",
      "/Imagenes/Carros/Audi/Audi-3.jpg"
    ],
    description: "SUV compacto premium totalmente eléctrico con espacio versátil y tecnología avanzada.",
    features: [
      "Quattro AWD",
      "Virtual Cockpit Plus",
      "MMI Navigation Plus",
      "Asientos deportivos",
      "Techo panorámico",
      "Cámara 360°"
    ],
    specs: {
      power: "299 CV",
      torque: "460 Nm",
      seats: 5,
      cargo: "520 litros",
      weight: "2,210 kg",
      dimensions: "4.59 x 1.86 x 1.63 m"
    }
  },

  // BYD
  {
    id: "byd-seal",
    brandId: "byd",
    brand: "BYD",
    model: "Seal",
    year: 2024,
    price: "$45,990",
    range: "570 km",
    acceleration: "0-100 km/h en 3.8s",
    topSpeed: "180 km/h",
    battery: "82.5 kWh",
    charging: "150 kW DC Fast Charging",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop"
    ],
    description: "El BYD Seal es un sedán eléctrico de alto rendimiento que combina elegancia, tecnología y eficiencia. Con la innovadora tecnología Blade Battery de BYD, ofrece seguridad excepcional y autonomía líder en su clase.",
    features: [
      "Blade Battery Technology",
      "AWD Performance",
      "Sistema DiLink 4.0",
      "Asientos ventilados",
      "Sistema de sonido Dynaudio",
      "Conducción autónoma Nivel 2"
    ],
    specs: {
      power: "530 CV",
      torque: "670 Nm",
      seats: 5,
      cargo: "400 litros",
      weight: "2,150 kg",
      dimensions: "4.80 x 1.88 x 1.46 m"
    }
  },
  {
    id: "byd-atto-3",
    brandId: "byd",
    brand: "BYD",
    model: "Atto 3",
    year: 2024,
    price: "$38,990",
    range: "480 km",
    acceleration: "0-100 km/h en 7.3s",
    topSpeed: "160 km/h",
    battery: "60.48 kWh",
    charging: "88 kW DC Fast Charging",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop"
    ],
    description: "SUV compacto eléctrico con diseño moderno y tecnología accesible.",
    features: [
      "Blade Battery",
      "Pantalla rotatoria 12.8",
      "Control por voz",
      "Techo panorámico",
      "Carga V2L",
      "Sistema ADAS"
    ],
    specs: {
      power: "204 CV",
      torque: "310 Nm",
      seats: 5,
      cargo: "440 litros",
      weight: "1,750 kg",
      dimensions: "4.46 x 1.88 x 1.66 m"
    }
  },

  // Honda
  {
    id: "honda-e-ny1",
    brandId: "honda",
    brand: "Honda",
    model: "e:Ny1",
    year: 2024,
    price: "$42,900",
    range: "412 km",
    acceleration: "0-100 km/h en 7.6s",
    topSpeed: "160 km/h",
    battery: "68.8 kWh",
    charging: "78 kW DC Fast Charging",
    image: "/Imagenes/Carros/Honda/Honda-1.jpg",
    gallery: [
      "/Imagenes/Carros/Honda/Honda-1.jpg",
      "/Imagenes/Carros/Honda/Honda-2.jpg",
      "/Imagenes/Carros/Honda/Honda-3.jpg"
    ],
    description: "El Honda e:Ny1 es un SUV eléctrico que combina el legendario espíritu de Honda con tecnología de vanguardia. Diseñado para la ciudad moderna, ofrece eficiencia, confort y tecnología avanzada.",
    features: [
      "Honda SENSING 360",
      "Pantalla táctil 15.2",
      "Conectividad Honda+",
      "Asientos calefactados",
      "Wireless CarPlay/Android Auto",
      "Cámara multi-ángulo"
    ],
    specs: {
      power: "204 CV",
      torque: "310 Nm",
      seats: 5,
      cargo: "361 litros",
      weight: "1,900 kg",
      dimensions: "4.39 x 1.79 x 1.58 m"
    }
  },

  // BMW
  {
    id: "bmw-i4",
    brandId: "bmw",
    brand: "BMW",
    model: "i4 M50",
    year: 2024,
    price: "$72,900",
    range: "510 km",
    acceleration: "0-100 km/h en 3.9s",
    topSpeed: "225 km/h",
    battery: "83.9 kWh",
    charging: "205 kW DC Fast Charging",
    image: "/Imagenes/Carros/BMW/BMW-1.jpg",
    gallery: [
      "/Imagenes/Carros/BMW/BMW-1.jpg",
      "/Imagenes/Carros/BMW/BMW-2.jpg"
    ],
    description: "El BMW i4 M50 es un Gran Coupé totalmente eléctrico que ofrece el rendimiento M característico de BMW con cero emisiones. Combina lujo, tecnología y deportividad en un paquete elegante.",
    features: [
      "M Sport Package",
      "xDrive AWD",
      "Curved Display",
      "Harman Kardon Sound",
      "Driving Assistant Pro",
      "Parking Assistant Plus"
    ],
    specs: {
      power: "544 CV",
      torque: "795 Nm",
      seats: 5,
      cargo: "470 litros",
      weight: "2,290 kg",
      dimensions: "4.78 x 1.85 x 1.45 m"
    }
  },
  {
    id: "bmw-ix",
    brandId: "bmw",
    brand: "BMW",
    model: "iX xDrive50",
    year: 2024,
    price: "$89,900",
    range: "630 km",
    acceleration: "0-100 km/h en 4.6s",
    topSpeed: "200 km/h",
    battery: "111.5 kWh",
    charging: "200 kW DC Fast Charging",
    image: "/Imagenes/Carros/BMW/BMW-2.jpg",
    gallery: [
      "/Imagenes/Carros/BMW/BMW-2.jpg",
      "/Imagenes/Carros/BMW/BMW-1.jpg"
    ],
    description: "SUV eléctrico insignia de BMW con tecnología y lujo de vanguardia.",
    features: [
      "iDrive 8",
      "Cristal Swarovski",
      "Sky Lounge Panoramic",
      "Bowers & Wilkins Diamond",
      "Highway Assistant",
      "Automated Parking"
    ],
    specs: {
      power: "523 CV",
      torque: "765 Nm",
      seats: 5,
      cargo: "500 litros",
      weight: "2,585 kg",
      dimensions: "4.95 x 1.97 x 1.70 m"
    }
  },

  // KIA
  {
    id: "kia-ev6",
    brandId: "kia",
    brand: "KIA",
    model: "EV6 GT",
    year: 2024,
    price: "$62,900",
    range: "424 km",
    acceleration: "0-100 km/h en 3.5s",
    topSpeed: "260 km/h",
    battery: "77.4 kWh",
    charging: "240 kW DC Fast Charging",
    image: "/Imagenes/Carros/KIA/KIA-1.jpg",
    gallery: [
      "/Imagenes/Carros/KIA/KIA-1.jpg",
      "/Imagenes/Carros/KIA/KIA-2.jpg",
      "/Imagenes/Carros/KIA/KIA-3.jpg"
    ],
    description: "El KIA EV6 GT es un crossover eléctrico de alto rendimiento que redefine la movilidad sostenible. Con tecnología de carga ultra rápida y diseño futurista, el EV6 GT ofrece 585 CV de potencia pura.",
    features: [
      "Carga ultra-rápida 800V",
      "AWD GT Performance",
      "Augmented Reality HUD",
      "Meridian Premium Sound",
      "Highway Driving Assist 2",
      "Vehicle-to-Load (V2L)"
    ],
    specs: {
      power: "585 CV",
      torque: "740 Nm",
      seats: 5,
      cargo: "490 litros",
      weight: "2,200 kg",
      dimensions: "4.69 x 1.89 x 1.55 m"
    }
  },
  {
    id: "kia-ev9",
    brandId: "kia",
    brand: "KIA",
    model: "EV9",
    year: 2024,
    price: "$74,900",
    range: "541 km",
    acceleration: "0-100 km/h en 5.3s",
    topSpeed: "200 km/h",
    battery: "99.8 kWh",
    charging: "240 kW DC Fast Charging",
    image: "/Imagenes/Carros/KIA/KIA-2.jpg",
    gallery: [
      "/Imagenes/Carros/KIA/KIA-2.jpg",
      "/Imagenes/Carros/KIA/KIA-3.jpg",
      "/Imagenes/Carros/KIA/KIA-1.jpg"
    ],
    description: "SUV eléctrico de tres filas con espacio premium y tecnología avanzada.",
    features: [
      "Configuración 6/7 asientos",
      "Doble pantalla 27",
      "Asientos reclinables",
      "Techo solar",
      "AutoMode",
      "Remote Smart Parking"
    ],
    specs: {
      power: "385 CV",
      torque: "700 Nm",
      seats: 7,
      cargo: "828 litros",
      weight: "2,750 kg",
      dimensions: "5.01 x 1.98 x 1.78 m"
    }
  },

  // Tesla
  {
    id: "tesla-model-s-plaid",
    brandId: "tesla",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: "$108,990",
    range: "637 km",
    acceleration: "0-100 km/h en 2.1s",
    topSpeed: "322 km/h",
    battery: "100 kWh",
    charging: "250 kW Supercharger",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop"
    ],
    description: "El Tesla Model S Plaid es el sedán de producción más rápido del mundo. Con tres motores eléctricos y más de 1,000 CV, ofrece una aceleración sin precedentes mientras mantiene una autonomía excepcional.",
    features: [
      "Tri-Motor AWD",
      "Autopilot Avanzado",
      "Pantalla 17\" Cinematic Display",
      "Yoke Steering",
      "22 Speakers Audio System",
      "Modo Plaid - 1,020 CV"
    ],
    specs: {
      power: "1,020 CV",
      torque: "1,420 Nm",
      seats: 5,
      cargo: "793 litros",
      weight: "2,162 kg",
      dimensions: "5.02 x 1.99 x 1.45 m"
    }
  },
  {
    id: "tesla-model-3",
    brandId: "tesla",
    brand: "Tesla",
    model: "Model 3 Performance",
    year: 2024,
    price: "$58,990",
    range: "547 km",
    acceleration: "0-100 km/h en 3.1s",
    topSpeed: "261 km/h",
    battery: "82 kWh",
    charging: "250 kW Supercharger",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&h=500&fit=crop"
    ],
    description: "Sedán eléctrico accesible con rendimiento deportivo y tecnología Tesla.",
    features: [
      "Dual Motor AWD",
      "Enhanced Autopilot",
      "Pantalla central 15",
      "Premium Audio",
      "Track Mode",
      "Actualizaciones OTA"
    ],
    specs: {
      power: "510 CV",
      torque: "660 Nm",
      seats: 5,
      cargo: "561 litros",
      weight: "1,844 kg",
      dimensions: "4.72 x 1.85 x 1.44 m"
    }
  }
];

