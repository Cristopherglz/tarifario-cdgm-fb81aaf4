export interface Servicio {
  id: string;
  nombre: string;
  categoria: string;
  subcategoria: string;
  horasBase: number;
  precioBase: number;
  descripcion: string;
}

export const TARIFAS_COMPLETAS: Servicio[] = [
  // DISEÑO DIGITAL
  { id: 'dd1', nombre: 'Banner publicitario animado', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 7, precioBase: 58.10, descripcion: 'Diseño de banner animado para web' },
  { id: 'dd2', nombre: 'Campaña SEM básica', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Diseño para campaña de publicidad en buscadores' },
  { id: 'dd3', nombre: 'Firma o encabezado de e-mail', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 2, precioBase: 16.60, descripcion: 'Diseño de firma para correo electrónico' },
  { id: 'dd4', nombre: 'Fotomontaje de imágenes', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 5, precioBase: 41.50, descripcion: 'Edición y composición de imágenes' },
  { id: 'dd5', nombre: 'Google Analytics', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 5, precioBase: 41.50, descripcion: 'Configuración y análisis de Google Analytics' },
  { id: 'dd6', nombre: 'Mailing publicitario (newsletter)', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Diseño de newsletter y mailing' },
  { id: 'dd7', nombre: 'Posicionamiento SEO optimizado', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Optimización SEO de contenido' },
  { id: 'dd8', nombre: 'Presentación interactiva', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 8, precioBase: 66.40, descripcion: 'Diseño de presentación interactiva' },
  { id: 'dd9', nombre: 'Retoque básico de imágenes digitales', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 3, precioBase: 24.90, descripcion: 'Retoque y edición básica de imágenes' },

  // WEB - BAJA COMPLEJIDAD
  { id: 'wb1', nombre: 'Sitio Web Proyecto completo. Diseño + Maquetación (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 20, precioBase: 166.00, descripcion: 'Diseño y maquetación completos' },
  { id: 'wb2', nombre: 'Sitio Web - Sólo diseño (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 10, precioBase: 83.00, descripcion: 'Solo diseño del sitio web' },
  { id: 'wb3', nombre: 'Sitio Web - Sólo maquetación (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 12, precioBase: 99.60, descripcion: 'Solo maquetación HTML/CSS' },

  // WEB - MEDIA COMPLEJIDAD
  { id: 'wm1', nombre: 'Sitio Web Proyecto completo. Diseño + Maquetación (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 32, precioBase: 265.60, descripcion: 'Diseño y maquetación con complejidad media' },
  { id: 'wm2', nombre: 'Sitio web - Sólo diseño (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 16, precioBase: 132.80, descripcion: 'Diseño con complejidad media' },
  { id: 'wm3', nombre: 'Sitio web - Sólo maquetación (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 20, precioBase: 166.00, descripcion: 'Maquetación con complejidad media' },

  // WEB - OTROS
  { id: 'wo1', nombre: 'Actualización de sitio web HTML/CSS', categoria: 'Web', subcategoria: 'Web', horasBase: 8, precioBase: 66.40, descripcion: 'Actualización de sitio existente' },
  { id: 'wo2', nombre: 'Landing Page sitio web - Sólo diseño', categoria: 'Web', subcategoria: 'Web', horasBase: 12, precioBase: 99.60, descripcion: 'Diseño de landing page' },
  { id: 'wo3', nombre: 'Landing Page sitio web - Sólo maquetación', categoria: 'Web', subcategoria: 'Web', horasBase: 10, precioBase: 83.00, descripcion: 'Maquetación de landing page' },
  { id: 'wo4', nombre: 'Armado tienda online básica (Tiendanube, Wix o similar)', categoria: 'Web', subcategoria: 'Web', horasBase: 16, precioBase: 132.80, descripcion: 'Configuración de tienda online' },

  // APP
  { id: 'app1', nombre: 'Diseño APP UX (experiencia de usuario)', categoria: 'APP', subcategoria: 'APP', horasBase: 24, precioBase: 199.20, descripcion: 'Diseño de experiencia de usuario' },
  { id: 'app2', nombre: 'Diseño APP UI (interfaz de usuario)', categoria: 'APP', subcategoria: 'APP', horasBase: 20, precioBase: 166.00, descripcion: 'Diseño de interfaz de usuario' },
  { id: 'app3', nombre: 'Maquetación APP (programación híbrida)', categoria: 'APP', subcategoria: 'APP', horasBase: 32, precioBase: 265.60, descripcion: 'Programación híbrida de app' },
  { id: 'app4', nombre: 'Maquetación APP (programación nativa)', categoria: 'APP', subcategoria: 'APP', horasBase: 40, precioBase: 332.00, descripcion: 'Programación nativa de app' },

  // DISEÑO EDITORIAL Y OTROS
  { id: 'de1', nombre: 'Diseño de Identidad', categoria: 'Diseño de Identidad', subcategoria: 'Diseño de Identidad', horasBase: 16, precioBase: 132.80, descripcion: 'Diseño de identidad visual' },
  { id: 'de2', nombre: 'Diseño Publicitario', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 8, precioBase: 66.40, descripcion: 'Diseño de materiales publicitarios' },
  { id: 'de3', nombre: 'Ilustración', categoria: 'Ilustración', subcategoria: 'Ilustración', horasBase: 12, precioBase: 99.60, descripcion: 'Ilustraciones personalizadas' },
  { id: 'de4', nombre: 'Infografía', categoria: 'Infografía', subcategoria: 'Infografía', horasBase: 10, precioBase: 83.00, descripcion: 'Diseño de infografías' },
  { id: 'de5', nombre: 'Piezas Promocionales', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 6, precioBase: 49.80, descripcion: 'Diseño de piezas promocionales' },
  { id: 'de6', nombre: 'Packaging', categoria: 'Packaging', subcategoria: 'Packaging', horasBase: 14, precioBase: 116.20, descripcion: 'Diseño de empaque' },
  { id: 'de7', nombre: 'Redes Sociales', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 4, precioBase: 33.20, descripcion: 'Diseño para redes sociales' },
  { id: 'de8', nombre: 'Señalética', categoria: 'Señalética', subcategoria: 'Señalética', horasBase: 12, precioBase: 99.60, descripcion: 'Diseño de señalética' },
  { id: 'de9', nombre: 'TV/VIDEO', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 20, precioBase: 166.00, descripcion: 'Diseño para video' },
  { id: 'de10', nombre: 'Volumetrico', categoria: 'Volumetrico', subcategoria: 'Volumetrico', horasBase: 18, precioBase: 149.40, descripcion: 'Diseño tridimensional' },
];

export const CATEGORIAS = [
  'Diseño Digital', 'Web', 'APP', 'Diseño de Identidad', 'Diseño Publicitario',
  'Ilustración', 'Infografía', 'Piezas Promocionales', 'Packaging',
  'Redes Sociales', 'Señalética', 'TV/VIDEO', 'Volumetrico',
];

export const MULTIPLICADORES_EXPERIENCIA: Record<string, number> = {
  junior: 1.00, semiSenior: 1.15, senior: 1.35,
};

export const MULTIPLICADORES_CLIENTE: Record<string, number> = {
  A: 1.00, B: 1.20, C: 1.35,
};

export const ETIQUETAS_EXPERIENCIA: Record<string, string> = {
  junior: 'Profesional Junior', semiSenior: 'Profesional Semi-Senior', senior: 'Profesional Senior',
};

export const ETIQUETAS_CLIENTE: Record<string, string> = {
  A: 'Cliente A / Pequeña', B: 'Cliente B / Mediana', C: 'Cliente C / Grande',
};
