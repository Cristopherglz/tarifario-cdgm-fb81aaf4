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
  { id: 'dd1', nombre: 'Banner publicitario animado', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 7, precioBase: 58.10, descripcion: 'Animación GIF, Javascript o versión reducida Jquery. Hasta 15\'' },
  { id: 'dd2', nombre: 'Campaña SEM básica', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Hasta 500 palabras claves + un informe mensual' },
  { id: 'dd3', nombre: 'Firma o encabezado de e-mail', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente. Imagen estática optimizada' },
  { id: 'dd4', nombre: 'Fotomontaje de imágenes', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 5, precioBase: 41.50, descripcion: 'Costo por imagen. Fotomontaje, restauración o aplicación de otras técnicas' },
  { id: 'dd5', nombre: 'Google Analytics', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 5, precioBase: 41.50, descripcion: 'Activación de sistema de reportes online de tráfico e integración' },
  { id: 'dd6', nombre: 'Mailing publicitario (newsletter)', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Diseño y desarrollo de pieza digital con vínculos activos' },
  { id: 'dd7', nombre: 'Posicionamiento SEO optimizado', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 6, precioBase: 49.80, descripcion: 'Lectura avanzada de la codificación del sitio' },
  { id: 'dd8', nombre: 'Presentación interactiva', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 12, precioBase: 99.60, descripcion: 'Diseño y armado de 10 pantallas. Sin audio ni video' },
  { id: 'dd9', nombre: 'Retoque básico de imágenes digitales', categoria: 'Diseño Digital', subcategoria: 'Diseño Digital', horasBase: 2, precioBase: 16.60, descripcion: 'Costo por 5 imágenes. Retoque de color, balance, etc.' },

  // WEB - BAJA COMPLEJIDAD
  { id: 'wb1', nombre: 'Sitio Web Proyecto completo. Diseño + Maquetación (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 45, precioBase: 373.50, descripcion: 'Diseño y maquetación completos hasta 5 secciones' },
  { id: 'wb2', nombre: 'Sitio Web - Sólo diseño (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 15, precioBase: 124.50, descripcion: 'Diseño de interfaz hasta 5 secciones' },
  { id: 'wb3', nombre: 'Sitio Web - Sólo maquetación (baja complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 30, precioBase: 249.00, descripcion: 'Maquetación HTML/CSS hasta 5 secciones' },

  // WEB - MEDIA COMPLEJIDAD
  { id: 'wm1', nombre: 'Sitio Web Proyecto completo. Diseño + Maquetación (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 65, precioBase: 539.50, descripcion: 'Diseño y maquetación hasta 10 secciones' },
  { id: 'wm2', nombre: 'Sitio web - Sólo diseño (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 20, precioBase: 166.00, descripcion: 'Diseño de interfaz hasta 10 secciones' },
  { id: 'wm3', nombre: 'Sitio web - Sólo maquetación (media complejidad)', categoria: 'Web', subcategoria: 'Web', horasBase: 45, precioBase: 373.50, descripcion: 'Maquetación hasta 10 secciones' },

  // WEB - OTROS
  { id: 'wo1', nombre: 'Actualización de sitio web HTML/CSS', categoria: 'Web', subcategoria: 'Web', horasBase: 15, precioBase: 124.50, descripcion: 'Modificación básica (datos, textos y fotos)' },
  { id: 'wo2', nombre: 'Landing Page sitio web - Sólo diseño', categoria: 'Web', subcategoria: 'Web', horasBase: 10, precioBase: 83.00, descripcion: 'Diseño de interfaz para campaña de marketing digital' },
  { id: 'wo3', nombre: 'Landing Page sitio web - Sólo maquetación', categoria: 'Web', subcategoria: 'Web', horasBase: 20, precioBase: 166.00, descripcion: 'Maquetación HTML para campaña de marketing digital' },
  { id: 'wo4', nombre: 'Armado tienda online básica (Tiendanube, Wix o similar)', categoria: 'Web', subcategoria: 'Web', horasBase: 35, precioBase: 290.50, descripcion: 'Edición de plantillas y carga de hasta 25 productos' },

  // APP
  { id: 'app1', nombre: 'Diseño APP UX (experiencia de usuario)', categoria: 'APP', subcategoria: 'APP', horasBase: 30, precioBase: 249.00, descripcion: 'Hasta 5 pantallas para un sistema operativo' },
  { id: 'app2', nombre: 'Diseño APP UI (interfaz de usuario)', categoria: 'APP', subcategoria: 'APP', horasBase: 30, precioBase: 249.00, descripcion: 'Hasta 5 pantallas para un sistema operativo' },
  { id: 'app3', nombre: 'Maquetación APP (programación híbrida)', categoria: 'APP', subcategoria: 'APP', horasBase: 30, precioBase: 249.00, descripcion: 'Hasta 5 secciones para un sistema operativo' },
  { id: 'app4', nombre: 'Maquetación APP (programación nativa)', categoria: 'APP', subcategoria: 'APP', horasBase: 45, precioBase: 373.50, descripcion: 'Hasta 5 secciones para un sistema operativo' },

  // DISEÑO EDITORIAL
  { id: 'ed1', nombre: 'Libro. Proyecto completo. Diseño Simple + Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 70, precioBase: 581.00, descripcion: 'Libro de 80 páginas (1 color, sin ilustraciones), tamaño A5' },
  { id: 'ed2', nombre: 'Libro. Proyecto completo. Diseño Complejo + Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 90, precioBase: 747.00, descripcion: 'Libro de 80 páginas (1 color, con ilustraciones), entre A5 y A4' },
  { id: 'ed3', nombre: 'Arte de tapa (libro)', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 15, precioBase: 124.50, descripcion: 'Diseño de tapa, contratapa y lomo' },
  { id: 'ed4', nombre: 'Libro. Diseño página simple', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 2, precioBase: 16.60, descripcion: 'Costo por página original' },
  { id: 'ed5', nombre: 'Libro. Diseño página compleja', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 2, precioBase: 16.60, descripcion: 'Costo por página original para revistas, manuales, etc.' },
  { id: 'ed6', nombre: 'Libro. Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 45, precioBase: 373.50, descripcion: 'Armado a partir de Master previo, 80 páginas' },
  { id: 'ed7', nombre: 'Señalador', categoria: 'Diseño Editorial', subcategoria: 'Libros', horasBase: 4, precioBase: 33.20, descripcion: 'Incluye 2 alternativas y 1 ajuste' },
  { id: 'ed8', nombre: 'Mailing. Diseño + Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Mailing', horasBase: 24, precioBase: 199.20, descripcion: 'Pieza gráfica A4, 2 pliegos, 8 páginas, 4 colores' },
  { id: 'ed9', nombre: 'Mailing. Sólo Diseño', categoria: 'Diseño Editorial', subcategoria: 'Mailing', horasBase: 15, precioBase: 124.50, descripcion: 'Diseño pieza gráfica A4, 2 pliegos, 8 páginas' },
  { id: 'ed10', nombre: 'Mailing. Sólo Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Mailing', horasBase: 10, precioBase: 83.00, descripcion: 'Armado pieza gráfica A4, 2 pliegos, 8 páginas' },
  { id: 'ed11', nombre: 'Revista Completa. Diseño + Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Revista', horasBase: 100, precioBase: 830.00, descripcion: 'Número 1 de revista A4, 4 pliegos, 16 páginas' },
  { id: 'ed12', nombre: 'Arte de tapa (revista)', categoria: 'Diseño Editorial', subcategoria: 'Revista', horasBase: 15, precioBase: 124.50, descripcion: 'Diseño de tapa, contratapa y lomo' },
  { id: 'ed13', nombre: 'Revista. Sólo Diseño', categoria: 'Diseño Editorial', subcategoria: 'Revista', horasBase: 65, precioBase: 539.50, descripcion: 'Diseño pieza maestra A4, 4 pliegos, 16 páginas' },
  { id: 'ed14', nombre: 'Revista. Sólo Maquetación', categoria: 'Diseño Editorial', subcategoria: 'Revista', horasBase: 20, precioBase: 166.00, descripcion: 'Armado pieza gráfica A4, 4 pliegos, 16 páginas' },
  { id: 'ed15', nombre: 'Catálogo de productos', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 40, precioBase: 332.00, descripcion: 'Hasta 20 páginas A4, 4 colores' },
  { id: 'ed16', nombre: 'Entrada / Ticket', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 4, precioBase: 33.20, descripcion: 'Tamaño A6 o menor, 2 alternativas y 1 ajuste' },
  { id: 'ed17', nombre: 'Folleto (tipo brochure)', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 24, precioBase: 199.20, descripcion: 'Díptico A4 abierto, 4 colores' },
  { id: 'ed18', nombre: 'Folleto (instructivo)', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 24, precioBase: 199.20, descripcion: 'Tríptico A4 con infografía de baja complejidad' },
  { id: 'ed19', nombre: 'Manual de instrucciones', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 2, precioBase: 16.60, descripcion: 'Costo por página A4' },
  { id: 'ed20', nombre: 'Menú / Carta (Gastronómico)', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 14, precioBase: 116.20, descripcion: 'Hasta 6 páginas A4, 4 colores' },
  { id: 'ed21', nombre: 'Tarjeta Salutación', categoria: 'Diseño Editorial', subcategoria: 'Diseño Editorial', horasBase: 6, precioBase: 49.80, descripcion: 'Formato A6, 2 alternativas y 1 ajuste' },

  // DISEÑO DE IDENTIDAD - ELEMENTOS MARCARIOS
  { id: 'di1', nombre: 'Proyecto de identidad visual completo', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 70, precioBase: 581.00, descripcion: 'Isologo + Manual + Papelería completa' },
  { id: 'di2', nombre: 'Claim', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 5, precioBase: 41.50, descripcion: 'Frase que describe servicio o producto' },
  { id: 'di3', nombre: 'Isologo / Imagotipo', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 25, precioBase: 207.50, descripcion: '2 alternativas y 1 ajuste. Archivo vectorial' },
  { id: 'di4', nombre: 'Isologo / Imagotipo (Manual de marca)', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 15, precioBase: 124.50, descripcion: 'Manual de marca existente con normativas de empleo' },
  { id: 'di5', nombre: 'Isologo / Imagotipo (Normalización)', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 8, precioBase: 66.40, descripcion: 'Grilla constructiva, proporciones, normalización de color' },
  { id: 'di6', nombre: 'Isologo / Imagotipo (rediseño)', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 20, precioBase: 166.00, descripcion: 'Rediseño de marca sin manual ni aplicaciones' },
  { id: 'di7', nombre: 'Isologo / Imagotipo (restyling)', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 16, precioBase: 132.80, descripcion: 'Restyling sin manual ni aplicaciones' },
  { id: 'di8', nombre: 'Marca efímera', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 20, precioBase: 166.00, descripcion: 'Marca de uso único o corta duración (ej: evento)' },
  { id: 'di9', nombre: 'Naming Corporativo/Institucional', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 9, precioBase: 74.70, descripcion: 'Desarrollo del nombre de marca corporativa' },
  { id: 'di10', nombre: 'Naming Producto/Evento', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 9, precioBase: 74.70, descripcion: 'Desarrollo del nombre para producto o evento' },
  { id: 'di11', nombre: 'Slogan/Lema', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 4, precioBase: 33.20, descripcion: 'Frase que acompaña al producto o empresa' },
  { id: 'di12', nombre: 'Tagline', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 5, precioBase: 41.50, descripcion: 'Frase que acompaña a la marca' },
  { id: 'di13', nombre: 'Tipografía', categoria: 'Diseño de Identidad', subcategoria: 'Elementos Marcarios', horasBase: 210, precioBase: 1743.00, descripcion: '1 variable, 256 glifos del set Latin-1' },

  // DISEÑO DE IDENTIDAD - PAPELERÍA
  { id: 'dp1', nombre: 'Papelería Completa', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 12, precioBase: 99.60, descripcion: 'Hasta 5 piezas gráficas sobre marca existente' },
  { id: 'dp2', nombre: 'Carpeta empresarial/institucional', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 7, precioBase: 58.10, descripcion: 'Tipo 44x31 cm para hojas A4' },
  { id: 'dp3', nombre: 'Hoja Membrete', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'dp4', nombre: 'Papelería Comercial', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 6, precioBase: 49.80, descripcion: 'Recibos, remitos, facturas' },
  { id: 'dp5', nombre: 'Sobres tipo bolsa/A4', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 3, precioBase: 24.90, descripcion: 'Aplicación sobre marca existente' },
  { id: 'dp6', nombre: 'Sobres tipo oficio inglés/carta', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 3, precioBase: 24.90, descripcion: '4 colores, 2 bocetos, 1 modificación' },
  { id: 'dp7', nombre: 'Tarjeta Personal', categoria: 'Diseño de Identidad', subcategoria: 'Papelería', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'dp8', nombre: 'Certificado', categoria: 'Diseño de Identidad', subcategoria: 'Diseño de Identidad', horasBase: 5, precioBase: 41.50, descripcion: 'Documento tipo A4 sobre marca existente' },
  { id: 'dp9', nombre: 'Postal', categoria: 'Diseño de Identidad', subcategoria: 'Diseño de Identidad', horasBase: 5, precioBase: 41.50, descripcion: 'Frente y dorso, 15x10 cm aprox.' },
  { id: 'dp10', nombre: 'Uniforme', categoria: 'Diseño de Identidad', subcategoria: 'Diseño de Identidad', horasBase: 3, precioBase: 24.90, descripcion: 'Aplicación de marca a remera, chomba, etc.' },
  { id: 'dp11', nombre: 'Uniforme (sistema)', categoria: 'Diseño de Identidad', subcategoria: 'Diseño de Identidad', horasBase: 23, precioBase: 190.90, descripcion: 'Sistema completo hasta 4 categorías' },

  // DISEÑO PUBLICITARIO
  { id: 'pub1', nombre: 'Afiche', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 5, precioBase: 41.50, descripcion: 'Tamaño A3, 2 alternativas y 1 ajuste' },
  { id: 'pub2', nombre: 'Bandeau', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 6, precioBase: 49.80, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub3', nombre: 'Banner autoportante', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 7, precioBase: 58.10, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub4', nombre: 'Cenefa', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 8, precioBase: 66.40, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub5', nombre: 'Diseño de pared', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 8, precioBase: 66.40, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub6', nombre: 'Ploteado vehicular (baja complejidad)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 9, precioBase: 74.70, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub7', nombre: 'Ploteado vehicular (alta complejidad)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 12, precioBase: 99.60, descripcion: '2 alternativas y 1 ajuste' },
  { id: 'pub8', nombre: 'Póster (Interno)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 7, precioBase: 58.10, descripcion: 'Diseño A4, 2 alternativas y 1 ajuste' },
  { id: 'pub9', nombre: 'Publicidad', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 16, precioBase: 132.80, descripcion: 'Formato A4, 2 alternativas y 1 ajuste' },
  { id: 'pub10', nombre: 'Vía Pública', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 15, precioBase: 124.50, descripcion: 'Valla publicitaria tipo carapantalla' },
  { id: 'pub11', nombre: 'Vidriera', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 8, precioBase: 66.40, descripcion: 'Pieza de 4,4 x 2,2 m' },
  { id: 'pub12', nombre: 'Vidriera (ploteado)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 14, precioBase: 116.20, descripcion: 'Hasta 10 x 3 m, 2 propuestas' },
  { id: 'pub13', nombre: 'Volante/Flyer (frente y dorso)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 8, precioBase: 66.40, descripcion: 'Tamaño A5, 2 alternativas y 1 ajuste' },
  { id: 'pub14', nombre: 'Volante/Flyer (sólo frente)', categoria: 'Diseño Publicitario', subcategoria: 'Diseño Publicitario', horasBase: 6, precioBase: 49.80, descripcion: 'Tamaño A5, 2 alternativas y 1 ajuste' },

  // ILUSTRACIÓN
  { id: 'il1', nombre: 'Digitalización', categoria: 'Ilustración', subcategoria: 'Ilustración', horasBase: 3, precioBase: 24.90, descripcion: 'Redibujo de líneas para aplicación (logos, dibujos)' },
  { id: 'il2', nombre: 'Ilustración a mano alzada', categoria: 'Ilustración', subcategoria: 'Ilustración', horasBase: 12, precioBase: 99.60, descripcion: 'Dibujo para revista, folleto, sitio web. 2 cambios' },
  { id: 'il3', nombre: 'Ilustración / Modelado 3D', categoria: 'Ilustración', subcategoria: 'Ilustración', horasBase: 24, precioBase: 199.20, descripcion: 'Dibujo 3D para revista, folleto, sitio web' },
  { id: 'il4', nombre: 'Ilustración Vectorial', categoria: 'Ilustración', subcategoria: 'Ilustración', horasBase: 12, precioBase: 99.60, descripcion: 'Dibujo vectorial para revista, folleto, sitio web' },

  // INFOGRAFÍA
  { id: 'inf1', nombre: 'Infografía (baja complejidad)', categoria: 'Infografía', subcategoria: 'Infografía', horasBase: 20, precioBase: 166.00, descripcion: 'Tamaño escalable desde A4, 2 alternativas' },
  { id: 'inf2', nombre: 'Infografía (alta complejidad)', categoria: 'Infografía', subcategoria: 'Infografía', horasBase: 45, precioBase: 373.50, descripcion: 'Tamaño escalable desde A4, 2 alternativas' },
  { id: 'inf3', nombre: 'Infografía (animación baja complejidad)', categoria: 'Infografía', subcategoria: 'Infografía', horasBase: 20, precioBase: 166.00, descripcion: 'Animación de infografía diseñada. Hasta 25\'' },
  { id: 'inf4', nombre: 'Infografía (animación alta complejidad)', categoria: 'Infografía', subcategoria: 'Infografía', horasBase: 30, precioBase: 249.00, descripcion: 'Animación compleja de infografía. Hasta 25\'' },

  // PIEZAS PROMOCIONALES
  { id: 'pp1', nombre: 'Almanaque de pared simple', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 9, precioBase: 74.70, descripcion: 'Tipo póster A4, pliego simple' },
  { id: 'pp2', nombre: 'Almanaque de pared anillado', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 20, precioBase: 166.00, descripcion: 'Tipo revista, hasta 6 pliegos A4' },
  { id: 'pp3', nombre: 'Bandera', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'pp4', nombre: 'Bolsas / Envoltorios', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 3, precioBase: 24.90, descripcion: 'Aplicación sobre marca existente' },
  { id: 'pp5', nombre: 'Calcos', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'pp6', nombre: 'Lapiceras, pins, llaveros', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'pp7', nombre: 'Merchandising (pack)', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 15, precioBase: 124.50, descripcion: 'Hasta 10 piezas promocionales' },
  { id: 'pp8', nombre: 'Pads, fundas celulares, tazas', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 2, precioBase: 16.60, descripcion: 'Aplicación sobre marca existente' },
  { id: 'pp9', nombre: 'Remeras', categoria: 'Piezas Promocionales', subcategoria: 'Piezas Promocionales', horasBase: 6, precioBase: 49.80, descripcion: 'Formato A4, 2 alternativas y 1 ajuste' },

  // PACKAGING
  { id: 'pk1', nombre: 'Etiqueta Compuesta', categoria: 'Packaging', subcategoria: 'Packaging', horasBase: 40, precioBase: 332.00, descripcion: 'Sistema de hasta 3 etiquetas de un envase' },
  { id: 'pk2', nombre: 'Etiqueta Simple', categoria: 'Packaging', subcategoria: 'Packaging', horasBase: 15, precioBase: 124.50, descripcion: 'Modelo único: envoltura, impresión, bolsa, caja' },
  { id: 'pk3', nombre: 'Cajas/Pack de producto complejo', categoria: 'Packaging', subcategoria: 'Packaging', horasBase: 30, precioBase: 249.00, descripcion: 'Pack alta complejidad con troquel y prototipo' },
  { id: 'pk4', nombre: 'Cajas/Pack promocional', categoria: 'Packaging', subcategoria: 'Packaging', horasBase: 20, precioBase: 166.00, descripcion: 'Complejidad media con troquel' },

  // REDES SOCIALES
  { id: 'rs1', nombre: 'Pack Básico (Diseño y Gestión)', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 15, precioBase: 124.50, descripcion: '10 posteos/historias semanales, reels mensuales' },
  { id: 'rs2', nombre: 'Pack Intermedio (Diseño y Gestión)', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 25, precioBase: 207.50, descripcion: '20 posteos/historias semanales, publicidad paga' },
  { id: 'rs3', nombre: 'Pack Premium (Diseño y Gestión)', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 40, precioBase: 332.00, descripcion: 'Movimiento diario, 1 reel semanal' },
  { id: 'rs4', nombre: 'Perfil en RRSS', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 4, precioBase: 33.20, descripcion: 'Diseño de portada y perfil' },
  { id: 'rs5', nombre: 'Gestión de posteos en RRSS', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 15, precioBase: 124.50, descripcion: '20 posts/historias mensuales' },
  { id: 'rs6', nombre: 'Plan social media', categoria: 'Redes Sociales', subcategoria: 'Redes Sociales', horasBase: 15, precioBase: 124.50, descripcion: 'Estrategia de marketing y cronograma' },

  // SEÑALÉTICA
  { id: 'se1', nombre: 'Cartel para exteriores', categoria: 'Señalética', subcategoria: 'Señalética', horasBase: 12, precioBase: 99.60, descripcion: 'Tipo rutero, alta visibilidad' },
  { id: 'se2', nombre: 'Señalética', categoria: 'Señalética', subcategoria: 'Señalética', horasBase: 15, precioBase: 124.50, descripcion: 'Diseño de 3 piezas gráficas' },
  { id: 'se3', nombre: 'Señalética. Sistema + Diseño de soporte', categoria: 'Señalética', subcategoria: 'Señalética', horasBase: 15, precioBase: 124.50, descripcion: 'Hasta 15 piezas con manual de aplicación' },

  // TV/VIDEO
  { id: 'tv1', nombre: 'Pre-producción', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 12, precioBase: 99.60, descripcion: 'Storyboard, Diseño, Background, Styleframe' },
  { id: 'tv2', nombre: 'Placa estática', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 5, precioBase: 41.50, descripcion: 'Pieza 1920x1080 px, modo RGB' },
  { id: 'tv3', nombre: 'Placa animada (2D)', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 9, precioBase: 74.70, descripcion: 'Animación 1920x1080 px hasta 30\'' },
  { id: 'tv4', nombre: 'Spot publicitario/animación complejidad baja', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 12, precioBase: 99.60, descripcion: 'Motion graphics hasta 30\'' },
  { id: 'tv5', nombre: 'Spot publicitario/animación complejidad media', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 24, precioBase: 199.20, descripcion: 'Motion graphics con efectos hasta 40\'' },
  { id: 'tv6', nombre: 'Edición de video', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 8, precioBase: 66.40, descripcion: 'Edición con transiciones y efectos hasta 40\'' },
  { id: 'tv7', nombre: 'Infografía Animada', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 16, precioBase: 132.80, descripcion: 'Animación de texto y formas de 40\' en HD' },
  { id: 'tv8', nombre: 'Zócalo', categoria: 'TV/VIDEO', subcategoria: 'TV/VIDEO', horasBase: 9, precioBase: 74.70, descripcion: 'Sistema visual de 10 placas' },

  // VOLUMÉTRICO
  { id: 'vol1', nombre: 'Colgantes (supermercados/locales)', categoria: 'Volumétrico', subcategoria: 'Volumétrico', horasBase: 4, precioBase: 33.20, descripcion: 'Tamaño A6 o menor, 1 color' },
  { id: 'vol2', nombre: 'Llamadores (góndola de supermercados)', categoria: 'Volumétrico', subcategoria: 'Volumétrico', horasBase: 5, precioBase: 41.50, descripcion: 'Tamaño máximo A4, 4 colores' },
  { id: 'vol3', nombre: 'Stand (diseño morfológico)', categoria: 'Volumétrico', subcategoria: 'Volumétrico', horasBase: 18, precioBase: 149.40, descripcion: 'Diseño de exhibición o cubículo' },
  { id: 'vol4', nombre: 'Stand (gráfica sobre estructura)', categoria: 'Volumétrico', subcategoria: 'Volumétrico', horasBase: 30, precioBase: 249.00, descripcion: 'Aplicación de marca sobre estructura prediseñada' },
  { id: 'vol5', nombre: 'Stand (Modelado 3D)', categoria: 'Volumétrico', subcategoria: 'Volumétrico', horasBase: 8, precioBase: 66.40, descripcion: 'Diseño morfológico con renderizado, hasta 5 vistas' },
];

export const CATEGORIAS = [
  'Diseño Digital', 'Web', 'APP', 'Diseño Editorial', 'Diseño de Identidad',
  'Diseño Publicitario', 'Ilustración', 'Infografía', 'Piezas Promocionales',
  'Packaging', 'Redes Sociales', 'Señalética', 'TV/VIDEO', 'Volumétrico',
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
