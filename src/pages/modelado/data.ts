
export interface Modelado {
  id: number;
  titulo: string;
  src: string;
  descripcion: string;
  
}

export const modelados: Modelado[] = [
  {
    id: 1,
    titulo: 'Resultado 1',
    src: '/imagenes/Modelado/Resultado1.jpg',
    descripcion: 'Esta es la descripción detallada del primer modelo...'
  },
  {
    id: 2,
    titulo: 'Resultado 2',
    src: '/imagenes/Modelado/Resultado2.jpg',
    descripcion: 'Detalles técnicos y explicación del segundo modelo...'
  },
  {
    id: 3,
    titulo: 'Resultado 3',
    src: '/imagenes/Modelado/Resultado3.jpg',
    descripcion: 'Información sobre el proceso de creación del tercer modelo...'
  },
  {
    id: 4,
    titulo: 'Resultado 4',
    src: '/imagenes/Modelado/Resultado4.jpg',
    descripcion: 'Descripción del cuarto modelo...'
  },
  {
    id: 5,
    titulo: 'Resultado 5',
    src: '/imagenes/Modelado/Resultado5.jpg',
    descripcion: 'Descripción del quinto modelo...'
  },
  {
    id: 6,
    titulo: 'Doméstica',
    src: '/imagenes/Modelado/Doméstica.jpg',
    descripcion: 'Análisis y desarrollo de la escena Doméstica...'
  }
];