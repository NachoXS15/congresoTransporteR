interface members {
    id: number;
    nombre: string;
    rol?: string;
    extra?: string;
    img?: string;
  }
  interface sponsor {
    id: number;
    nombre: string;
    url: string;
    img?: string;
  }
  
  interface item {
    id: number;
    info: string;
    hora?: string;
    tag?: string;
  }
  export const cronograma: item[] = [
    {
      id: 1,
      info: "Acreditación",
      hora: "09:00 am",
    },
    {
      id: 2,
      info: "Acreditación",
      hora: "09:30 am",
    },
    {
      id: 3,
      info: "Acreditación",
      hora: "09:00 am",
      tag: "exposición",
    },
  ];
  
  export const directivos: members[] = [
    {
      id: 1,
      nombre: "Marcelo Ferraris",
      rol: "Presidente",
      extra: "Provincia de Salta",
    },
    {
      id: 2,
      nombre: "Alcira Brizuela",
      rol: "Vicepresidente",
      extra: "Provincia de La Rioja",
    },
    {
      id: 3,
      nombre: "Juan Ignacio Ciancaglini",
      rol: "Secretario",
      extra: "Provincia de Rio Negro",
    },
  ];
  
  export const sponsors: sponsor[] = [
    {
      id: 1,
      nombre: "Mercedes-Benz",
      url: "https://www.mercedes-benz.com.ar/",
      img: "mercedes_logos.png",
    },
    {
      id: 2,
      nombre: "Bizland",
      url: "https://www.bizland.tech/",
      img: "bizland.png",
    },
    {
      id: 3,
      nombre: "Smod",
      url: "https://bicicletas.smod.io/",
      img: "smod.png",
    },
    {
      id: 4,
      nombre: "Marcopolo",
      url: "https://www.marcopolo.com.br/es",
      img: "marcopolo-logo.png",
    },
    {
      id: 5,
      nombre: "Red Bus",
      url: "/",
      img: "LogoRedBus.png",
    },
    {
      id: 6,
      nombre: "Buswagen",
      url: "https://buswagen.com.ar/",
      img: "buswagen_s_a_cover.jpg",
    },
  ];
  