// src/types/index.ts

export type ContextoProyecto = 'design' | 'solutions';

// Restauramos esta interfaz para el Header
export interface EnlaceExterno {
    url: string;
    texto: string;
    iconoClase?: string;
}

// Nueva interfaz de Proyecto (Optimizada para el Modal)
export interface Proyecto {
    id: string;
    nombre: string;
    descripcion: string;
    desafioSolucion?: string;
    tecnologias?: string[];
    fecha?: string;
    contexto: ContextoProyecto;
    categorias: string[];
    imagenUrl: string;
    imagenFallbackUrl: string;
    urlProyecto?: string;
    destacado: boolean;
}