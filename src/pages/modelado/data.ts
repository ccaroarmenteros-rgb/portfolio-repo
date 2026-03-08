
export interface Modelado {
  id: number;
  titulo: string;
  imagenCarrusel: string; 
  videoDetalle?: string; 
  descripcion: string;
}

export const modelados: Modelado[] = [
  {
    id: 1,
    titulo: 'Escarabajo',
    imagenCarrusel: '/imagenes/Modelado/Escarabajo.png', 
    videoDetalle: '/imagenes/Modelado/Escarabajo.MP4',          
    descripcion: 'Llavero de escarabajo azul y blanco con avalorios.'
  },
  {
    id: 2,
    titulo: 'Pulpo',
    imagenCarrusel: '/imagenes/Modelado/Pulpo.png', 
    videoDetalle: '/imagenes/Modelado/Pulpo.MP4',
    descripcion: 'Llavero de pulpo rojo con una flor en la cabeza y con avalorios.'
  },
  {
    id: 3,
    titulo: 'Pez',
    imagenCarrusel: '/imagenes/Modelado/Pez.png', 
    videoDetalle: '/imagenes/Modelado/Pez.MP4',
    descripcion: 'Llavero de pez verde y amarillo con avalorios.'
  },
  {
    id: 4,
    titulo: 'Tortuga',
    imagenCarrusel: '/imagenes/Modelado/Tortuga.png', 
    videoDetalle: '/imagenes/Modelado/Tortuga.MP4',
    descripcion: 'Llavero de tortuga azulada con patrones.'
  },
  {
    id: 5,
    titulo: 'Ninfa',
    imagenCarrusel: '/imagenes/Modelado/Ninfa.png', 
    videoDetalle: '/imagenes/Modelado/Ninfa.MP4',
    descripcion: 'Llavero de ninfa'
  },
  {
    id: 6,
    titulo: 'Perrito',
    imagenCarrusel: '/imagenes/Modelado/Perro.png', 
    videoDetalle: '/imagenes/Modelado/Perro.MP4',
    descripcion: 'Llavero de perrito vestido de fresa.'
  },
  {
    id:7,
    titulo: 'Morsa',
    imagenCarrusel: '/imagenes/Modelado/Morsa.png', 
    videoDetalle: '/imagenes/Modelado/Morsa.MP4',
    descripcion: 'Llavero de morsa lectora.'
  }
];