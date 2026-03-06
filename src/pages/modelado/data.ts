
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
    descripcion: 'Llavero escarabajo azul y blanco con avalorios.'
  },
  {
    id: 2,
    titulo: 'Resultado estático',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Este modelo solo tiene foto, no tiene vídeo.'
  },
  {
    id: 3,
    titulo: 'Resultado 3',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Información sobre el proceso de creación del tercer modelo...'
  },
  {
    id: 4,
    titulo: 'Resultado 4',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Descripción del cuarto modelo...'
  },
  {
    id: 5,
    titulo: 'Resultado 5',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Descripción del quinto modelo...'
  },
  {
    id: 6,
    titulo: 'Doméstica',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Análisis y desarrollo de la escena Doméstica...'
  },
  {
    id:7,
    titulo: 'Doméstica',
    imagenCarrusel: '/imagenes/Modelado/PortadaAnimacion1.jpg', 
    videoDetalle: '/imagenes/Modelado/animacion1.mp4',
    descripcion: 'Análisis y desarrollo de la escena Doméstica...'
  }
];