import React, { useState, useMemo, useEffect } from 'react';
import { Trash2, Plus, X, Printer, MessageSquare, Check, ArrowUp } from 'lucide-react';
import '@/styles/print.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import PrintPreviewMultiPage from '@/components/PrintPreviewMultiPage';
import {
  TARIFAS_COMPLETAS,
  CATEGORIAS,
  MULTIPLICADORES_EXPERIENCIA,
  MULTIPLICADORES_CLIENTE,
  Servicio,
} from '@/lib/tarifasCompletas';

interface ItemPresupuesto {
  id: string;
  servicio: Servicio | null;
  nombre: string;
  categoria: string;
  horas: number;
  precioHora: number;
  subtotal: number;
  esPersonalizada: boolean;
}

// Función para formatear números en formato latinoamericano
const formatearMoneda = (valor: number, decimales: number = 2): string => {
  return valor.toLocaleString('es-AR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
};

export default function TarifarioFinal() {
  const [divisa, setDivisa] = useState('ARS');
  const [valorHoraUSD, setValorHoraUSD] = useState(0);
  const [tasaConversion, setTasaConversion] = useState(1000);
  const [valorHoraARS] = useState(11910.50); // Valor fijo en pesos argentinos
  const [experiencia, setExperiencia] = useState('semiSenior');
  const [tipoCliente, setTipoCliente] = useState('A');
  const [itemsPresupuesto, setItemsPresupuesto] = useState<ItemPresupuesto[]>([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null);
  const [servicioPersonalizada, setServicioPersonalizada] = useState('');
  const [horasPersonalizadas, setHorasPersonalizadas] = useState(1);
  const [mostrarPersonalizadas, setMostrarPersonalizadas] = useState(false);
  const [mostrarPopupPresupuesto, setMostrarPopupPresupuesto] = useState(false);
  const [servicioAgregadoId, setServicioAgregadoId] = useState<string | null>(null);
  const [mostrarBotonArriba, setMostrarBotonArriba] = useState(false);
  
  // Datos del presupuesto
  const [numeroMatricula, setNumeroMatricula] = useState('');
  const [nombreProfesional, setNombreProfesional] = useState('');
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaEmision, setFechaEmision] = useState(new Date().toISOString().split('T')[0]);
  const [fechaValidez, setFechaValidez] = useState('');
  const [formaPago, setFormaPago] = useState('');
  const [terminosCondiciones, setTerminosCondiciones] = useState('');
  const [logoProfesional, setLogoProfesional] = useState<string | null>(null);

  // Calcular precio con multiplicadores
  const calcularPrecio = (precioBase: number) => {
    const expMult = MULTIPLICADORES_EXPERIENCIA[experiencia] || 1;
    const clienteMult = MULTIPLICADORES_CLIENTE[tipoCliente] || 1;
    return precioBase * expMult * clienteMult;
  };

  // Obtener valor hora en la divisa seleccionada
  const valorHoraEnDivisa = divisa === 'ARS' ? valorHoraARS : valorHoraUSD;

  // Tarifas filtradas
  const tarifasFiltradas = useMemo(() => {
    if (!categoriaFiltro) return TARIFAS_COMPLETAS;
    return TARIFAS_COMPLETAS.filter((t) => t.categoria === categoriaFiltro);
  }, [categoriaFiltro]);

  // Agregar servicio estándar con un click
  const agregarServicio = (servicioId: string) => {
    const servicio = TARIFAS_COMPLETAS.find((t) => t.id === servicioId);
    if (!servicio) return;

    const precioHora = calcularPrecio(valorHoraEnDivisa);
    const horas = servicio.horasBase; // Usar horas mínimas del servicio
    const subtotal = precioHora * horas;

    const nuevoItem: ItemPresupuesto = {
      id: `${servicio.id}-${Date.now()}`,
      servicio,
      nombre: servicio.nombre,
      categoria: servicio.categoria,
      horas,
      precioHora,
      subtotal,
      esPersonalizada: false,
    };

    setItemsPresupuesto([...itemsPresupuesto, nuevoItem]);
    
    // Mostrar feedback visual
    setServicioAgregadoId(servicioId);
    setTimeout(() => {
      setServicioAgregadoId(null);
    }, 1000);
  };

  // Detectar scroll para mostrar/ocultar botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setMostrarBotonArriba(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Agregar servicio personalizada
  const agregarServicioPersonalizada = () => {
    if (!servicioPersonalizada.trim()) return;

    const precioHora = calcularPrecio(valorHoraEnDivisa);
    const subtotal = precioHora * horasPersonalizadas;

    const nuevoItem: ItemPresupuesto = {
      id: `custom-${Date.now()}`,
      servicio: null,
      nombre: servicioPersonalizada,
      categoria: 'Personalizada',
      horas: horasPersonalizadas,
      precioHora,
      subtotal,
      esPersonalizada: true,
    };

    setItemsPresupuesto([...itemsPresupuesto, nuevoItem]);
    setServicioPersonalizada('');
    setHorasPersonalizadas(1);
    setMostrarPersonalizadas(false);
  };

  // Eliminar servicio
  const eliminarServicio = (id: string) => {
    setItemsPresupuesto(itemsPresupuesto.filter((item) => item.id !== id));
  };

  // Actualizar horas
  const actualizarHoras = (id: string, nuevasHoras: number) => {
    setItemsPresupuesto(
      itemsPresupuesto.map((item) => {
        if (item.id === id) {
          // Enforce minimum hours based on service definition
          const minHoras = item.servicio?.horasBase || 1;
          const horasFinales = Math.max(nuevasHoras, minHoras);
          const subtotal = item.precioHora * horasFinales;
          return { ...item, horas: horasFinales, subtotal };
        }
        return item;
      })
    );
  };

  // Calcular totales
  const subtotalPresupuesto = itemsPresupuesto.reduce((sum, item) => sum + item.subtotal, 0);
  const totalPresupuesto = subtotalPresupuesto;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 py-8 px-4">
      <div className="no-print">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img src="/1a0b5b42-2bdc-4877-8258-ddfd97b3f4ae.png" alt="CDGM Logo" className="h-24 mx-auto mb-6 object-scale-down" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-600 bg-clip-text text-transparent mb-3">
            Tarifario para profesionales
          </h1>
        </div>

        {/* Layout Principal: 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Columna Izquierda - Configuración Compacta */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white shadow-2xl border-0 sticky top-4">
              <h2 className="text-xl font-bold text-cyan-900 mb-6">Configuración</h2>

              {/* Divisa */}
              <div className="mb-6">
                <label className="text-sm font-bold text-cyan-700 mb-2 block">Divisa</label>
                <select
                  value={divisa}
                  onChange={(e) => setDivisa(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-cyan-900 font-semibold text-sm hover:border-cyan-400 transition"
                >
                  <option value="USD">USD (Dólares)</option>
                  <option value="ARS">ARS (Pesos)</option>
                </select>
              </div>

              {/* Valor Hora */}
              <div className="mb-6">
                {divisa === 'ARS' ? (
                  <>
                    <label className="text-sm font-bold text-cyan-700 mb-2 block">Valor Hora</label>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-300">
                      <p className="text-xs text-green-600 mb-2">Valor mínimo recomendado en ARS</p>
                      <p className="text-3xl font-bold text-green-700">
                        ${formatearMoneda(valorHoraARS, 2)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <label className="text-sm font-bold text-cyan-700 mb-2 block">Valor Hora USD</label>
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border-2 border-cyan-300 mb-3">
                      <p className="text-xs text-cyan-600 mb-2">Valor actual en USD</p>
                      <p className="text-3xl font-bold text-cyan-700">
                        ${formatearMoneda(valorHoraUSD, 2)}
                      </p>
                    </div>
                    <div className="relative mb-3">
                      <span className="absolute left-3 top-2.5 text-cyan-600 font-bold">$</span>
                      <Input
                        type="text"
                        value={formatearMoneda(valorHoraUSD, 2)}
                        onChange={(e) => {
                          let valor = e.target.value.replace(/\./g, '').replace(',', '.');
                          const numValue = parseFloat(valor) || 0;
                          setValorHoraUSD(numValue);
                        }}
                        min="0"
                        placeholder="Ingresa el valor hora en USD (ej: 50,00)"
                        className="w-full pl-7 pr-3 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500 font-bold text-sm"
                      />
                    </div>
                    <p className="text-xs text-cyan-600 mb-3">Formato: 50,00 (punto para miles, coma para centavos)</p>
                  </>
                )}
              </div>

              {/* Experiencia */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-cyan-700 block">Tu Experiencia</label>
                  <span className="text-xs font-semibold text-cyan-600 bg-cyan-100 px-2 py-1 rounded">x{MULTIPLICADORES_EXPERIENCIA[experiencia] || 1}</span>
                </div>
                <select
                  value={experiencia}
                  onChange={(e) => setExperiencia(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-cyan-900 font-semibold text-sm hover:border-cyan-400 transition"
                >
                  <option value="junior">Profesional Junior</option>
                  <option value="semiSenior">Profesional Semi-Senior</option>
                  <option value="senior">Profesional Senior</option>
                </select>
              </div>

              {/* Tipo de Cliente */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-cyan-700 block">Tipo de Cliente</label>
                  <span className="text-xs font-semibold text-cyan-600 bg-cyan-100 px-2 py-1 rounded">x{MULTIPLICADORES_CLIENTE[tipoCliente] || 1}</span>
                </div>
                <select
                  value={tipoCliente}
                  onChange={(e) => setTipoCliente(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-cyan-900 font-semibold text-sm hover:border-cyan-400 transition"
                >
                  <option value="A">Cliente A / Pequeña</option>
                  <option value="B">Cliente B / Mediana</option>
                  <option value="C">Cliente C / Grande</option>
                </select>
              </div>
            </Card>
          </div>

          {/* Columna Derecha - Servicios y Presupuesto */}
          <div className="lg:col-span-3 space-y-6">
            {/* Categorías y Servicios */}
            <Card className="p-8 bg-white shadow-2xl border-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-cyan-900">Selecciona servicios</h2>
                <button
                  onClick={() => {
                    const instructivoSection = document.getElementById('instructivo-uso');
                    if (instructivoSection) {
                      instructivoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition font-semibold text-sm border-2 border-cyan-300"
                >
                  📖 Ver instructivo de uso
                </button>
              </div>

              {/* Botones de Categorías */}
              <div className="mb-6 pb-6 border-b-2 border-cyan-200">
                <p className="text-sm font-semibold text-cyan-700 mb-3">Filtrar por categoría:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategoriaFiltro(null)}
                    className={`px-4 py-2 rounded-full font-semibold transition ${
                      categoriaFiltro === null
                        ? 'bg-cyan-600 text-white shadow-lg'
                        : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                    }`}
                  >
                    Todas
                  </button>
                  {CATEGORIAS.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoriaFiltro(cat)}
                      className={`px-4 py-2 rounded-full font-semibold transition ${
                        categoriaFiltro === cat
                          ? 'bg-cyan-600 text-white shadow-lg'
                          : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Servicios de la Categoría Seleccionada */}
              <div className="space-y-3">
                {tarifasFiltradas.map((servicio) => (
                  <div key={servicio.id} className="border-2 border-cyan-200 rounded-lg p-4 hover:border-cyan-400 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-cyan-900">{servicio.nombre}</h3>
                        <p className="text-xs text-cyan-600 mt-1">{servicio.descripcion}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs font-semibold">
                          ⏱ Mínimo {servicio.horasBase} {servicio.horasBase === 1 ? 'hora' : 'horas'}
                        </span>
                      </div>
                      <button
                        onClick={() => agregarServicio(servicio.id)}
                        className={`ml-3 px-3 py-2 rounded-lg transition font-semibold text-sm flex items-center gap-1 ${
                          servicioAgregadoId === servicio.id
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-cyan-600 text-white hover:bg-cyan-700'
                        }`}
                      >
                        {servicioAgregadoId === servicio.id ? (
                          <>
                            <Check size={16} />
                            Agregado
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            Agregar
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón para Servicios Personalizadas */}
              <div className="mt-6 pt-6 border-t-2 border-cyan-200">
                {!mostrarPersonalizadas ? (
                  <button
                    onClick={() => setMostrarPersonalizadas(true)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition font-bold"
                  >
                    <Plus size={18} className="inline mr-2" />
                    Agregar servicio personalizado
                  </button>
                ) : (
                  <div className="space-y-3 bg-cyan-50 p-4 rounded-lg border-2 border-cyan-200">
                    <label className="text-sm font-bold text-cyan-700 block">Nombre del servicio</label>
                    <Input
                      type="text"
                      placeholder="Ej: Consultoría de marca"
                      value={servicioPersonalizada}
                      onChange={(e) => setServicioPersonalizada(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={agregarServicioPersonalizada}
                        className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-semibold"
                      >
                        Agregar
                      </button>
                      <button
                        onClick={() => setMostrarPersonalizadas(false)}
                        className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition font-semibold"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Presupuesto */}
            {itemsPresupuesto.length > 0 && (
              <Card className="p-8 bg-white shadow-2xl border-0">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-cyan-900">Presupuesto</h2>
                  <button
                    onClick={() => setMostrarPopupPresupuesto(true)}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-semibold"
                  >
                    Presupuestar
                  </button>
                </div>

                {/* Tabla de Presupuesto */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-cyan-300">
                        <th className="text-left py-3 px-4 font-bold text-cyan-900">Descripción</th>
                        <th className="text-center py-3 px-4 font-bold text-cyan-900">Horas</th>
                        <th className="text-right py-3 px-4 font-bold text-cyan-900">Precio/Hora</th>
                        <th className="text-right py-3 px-4 font-bold text-cyan-900">Subtotal</th>
                        <th className="text-center py-3 px-4 font-bold text-cyan-900">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemsPresupuesto.map((item) => (
                        <tr key={item.id} className="border-b border-cyan-100 hover:bg-cyan-50">
                          <td className="py-3 px-4 text-cyan-900">{item.nombre}</td>
                          <td className="py-3 px-4 text-center">
                            <input
                              type="number"
                              value={item.horas}
                              onChange={(e) => actualizarHoras(item.id, parseFloat(e.target.value) || 1)}
                              min={item.servicio?.horasBase || 1}
                              step="1"
                              className="w-20 px-2 py-1 border border-cyan-300 rounded text-center font-semibold"
                              title={`Mínimo: ${item.servicio?.horasBase || 1} horas`}
                            />
                          </td>
                          <td className="py-3 px-4 text-right font-semibold text-cyan-700">
                            ${formatearMoneda(item.precioHora, 2)}
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-cyan-900">
                            ${formatearMoneda(item.subtotal, 2)}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => eliminarServicio(item.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totales */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-300">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-cyan-900">Total:</span>
                    <span className="text-3xl font-bold text-cyan-700">
                      ${formatearMoneda(totalPresupuesto, 2)} {divisa}
                    </span>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
        </div>

        {/* Popup Presupuesto */}
        {mostrarPopupPresupuesto && (
          <div className="fixed inset-0 bg-slate-500 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-0">
              <div className="p-8">
              {/* Header del Popup */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-cyan-900">Plantilla de Presupuesto</h2>
                <button
                  onClick={() => setMostrarPopupPresupuesto(false)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Contenido del Presupuesto */}
              <div className="space-y-6">
                {/* Sección 0: Logo del Profesional */}
                <div className="border-b-2 border-cyan-200 pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Logo/Imagen del Profesional</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-bold text-cyan-700 mb-2 block">Subir Logo o Imagen</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setLogoProfesional(event.target?.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                      />
                      <p className="text-xs text-cyan-600 mt-2">Formatos soportados: JPG, PNG, GIF. Tamaño máximo: 5MB</p>
                    </div>
                    {logoProfesional && (
                      <div className="flex flex-col items-center">
                        <img src={logoProfesional} alt="Logo" className="h-24 w-24 object-contain border-2 border-cyan-300 rounded-lg p-2" />
                        <button
                          onClick={() => setLogoProfesional(null)}
                          className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition"
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sección 1: Datos del Profesional */}
                <div className="border-b-2 border-cyan-200 pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Datos del Profesional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-cyan-700 mb-2 block">Número de Matrícula</label>
                      <Input
                        type="text"
                        value={numeroMatricula}
                        onChange={(e) => setNumeroMatricula(e.target.value)}
                        placeholder="Ej: CDGM-2024-001"
                        className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-cyan-700 mb-2 block">Nombre del Profesional/Agencia/Estudio</label>
                      <Input
                        type="text"
                        value={nombreProfesional}
                        onChange={(e) => setNombreProfesional(e.target.value)}
                        placeholder="Ej: Juan Pérez - Diseño Gráfico"
                        className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Sección 2: Datos del Cliente */}
                <div className="border-b-2 border-cyan-200 pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Datos del Cliente/Comitente</h3>
                  <Input
                    type="text"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    placeholder="Nombre del cliente o empresa"
                    className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                {/* Sección 3: Fechas */}
                <div className="border-b-2 border-cyan-200 pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Fechas del Presupuesto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-cyan-700 mb-2 block">Fecha de Emisión</label>
                      <Input
                        type="date"
                        value={fechaEmision}
                        onChange={(e) => setFechaEmision(e.target.value)}
                        className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-cyan-700 mb-2 block">Fecha de Validez</label>
                      <Input
                        type="date"
                        value={fechaValidez}
                        onChange={(e) => setFechaValidez(e.target.value)}
                        placeholder="Hasta cuándo es válido"
                        className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Sección 4: Detalle de Servicios */}
                <div className="border-b-2 border-cyan-200 pb-6 print-section">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4 print-section-title">Detalle de Servicios</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm print-table">
                      <thead>
                        <tr className="border-b-2 border-cyan-300 bg-cyan-50">
                          <th className="text-left py-2 px-3 font-bold text-cyan-900">Descripción</th>
                          <th className="text-center py-2 px-3 font-bold text-cyan-900">Categoría</th>
                          <th className="text-center py-2 px-3 font-bold text-cyan-900">Horas</th>
                          <th className="text-right py-2 px-3 font-bold text-cyan-900">Precio/Hora</th>
                          <th className="text-right py-2 px-3 font-bold text-cyan-900">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemsPresupuesto.map((item) => (
                          <tr key={item.id} className="border-b border-cyan-100">
                            <td className="py-2 px-3 text-cyan-900">{item.nombre}</td>
                            <td className="py-2 px-3 text-center text-cyan-700">{item.categoria}</td>
                            <td className="py-2 px-3 text-center text-cyan-900 font-semibold">{item.horas}</td>
                            <td className="py-2 px-3 text-right text-cyan-700">${formatearMoneda(item.precioHora, 2)}</td>
                            <td className="py-2 px-3 text-right text-cyan-900 font-bold">${formatearMoneda(item.subtotal, 2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sección 5: Total */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-300 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-900">TOTAL:</span>
                    <span className="text-4xl font-bold text-cyan-700">
                      ${formatearMoneda(totalPresupuesto, 2)} {divisa}
                    </span>
                  </div>
                </div>

                {/* Sección 6: Forma de Pago */}
                <div className="border-b-2 border-cyan-200 pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Forma de Pago</h3>
                  <textarea
                    value={formaPago}
                    onChange={(e) => setFormaPago(e.target.value)}
                    placeholder="Ej: Transferencia bancaria, efectivo, tarjeta de crédito, etc."
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500 font-sans"
                  />
                </div>

                {/* Sección 7: Términos y Condiciones */}
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">Términos y Condiciones</h3>
                  <textarea
                    value={terminosCondiciones}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTerminosCondiciones(e.target.value)}
                    placeholder="Ej: Incluir cambios ilimitados, plazos de entrega, revisiones incluidas, etc."
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-cyan-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500 font-sans"
                  />
                </div>

                {/* Botones de Acción */}
                <div className="flex gap-4 pt-6 border-t-2 border-cyan-200">
                  <button
                    onClick={handlePrint}
                    className="flex-1 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-bold flex items-center justify-center gap-2"
                  >
                    <Printer size={20} />
                    Imprimir Presupuesto
                  </button>
                  <button
                    onClick={() => setMostrarPopupPresupuesto(false)}
                    className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition font-bold"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
              </div>
            </Card>
          </div>
        )}

        {/* Sección de Instrucciones */}
        <div className="mt-16 mb-8">
          <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg border-2 border-cyan-200">
            <div className="max-w-4xl mx-auto">
            <h2 id="instructivo-uso" className="text-2xl font-bold text-cyan-900 mb-6 text-center">📖 Cómo usar el Tarifario</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Paso 1 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Selecciona la Divisa</h3>
                    <p className="text-sm text-cyan-800">Elige si trabajarás en USD (Dólares) o ARS (Pesos Argentinos). Esta selección afectará todos los cálculos.</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Establece el Valor Hora</h3>
                    <p className="text-sm text-cyan-800">Ingresa tu valor hora sin decimales. Este será el precio base para calcular todos los servicios.</p>
                  </div>
                </div>
              </div>

              {/* Paso 3 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Indica tu Experiencia</h3>
                    <p className="text-sm text-cyan-800">Selecciona tu nivel (Junior, Semi-Senior o Senior). Esto aplicará un multiplicador al precio base.</p>
                  </div>
                </div>
              </div>

              {/* Paso 4 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Selecciona el Tipo de Cliente</h3>
                    <p className="text-sm text-cyan-800">Elige entre Cliente A (Pequeña), B (Mediana) o C (Grande). Esto ajusta el precio según la magnitud del cliente.</p>
                  </div>
                </div>
              </div>

              {/* Paso 5 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Elige los Servicios</h3>
                    <p className="text-sm text-cyan-800">Selecciona las categorías y luego los servicios específicos. Haz clic en "+ Agregar" para incluirlos en el presupuesto.</p>
                  </div>
                </div>
              </div>

              {/* Paso 6 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Ajusta las Horas</h3>
                    <p className="text-sm text-cyan-800">Modifica la cantidad de horas para cada servicio. El precio se calculará automáticamente.</p>
                  </div>
                </div>
              </div>

              {/* Paso 7 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Agrega Servicios Personalizados</h3>
                    <p className="text-sm text-cyan-800">Si necesitas incluir servicios no listados, usa la opción de agregar servicios personalizados con tu propio nombre y horas.</p>
                  </div>
                </div>
              </div>

              {/* Paso 8 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">8</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Genera el Presupuesto</h3>
                    <p className="text-sm text-cyan-800">Haz clic en "Presupuestar" para abrir la plantilla. Completa tus datos, datos del cliente, forma de pago y términos.</p>
                  </div>
                </div>
              </div>

              {/* Paso 9 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">9</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Carga tu Logo</h3>
                    <p className="text-sm text-cyan-800">Sube la imagen o logo de tu profesional/agencia para darle identidad al presupuesto.</p>
                  </div>
                </div>
              </div>

              {/* Paso 10 - Tarjeta Interactiva */}
              <div className="bg-white p-6 rounded-xl border-2 border-cyan-300 shadow-md hover:shadow-xl hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">10</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-900 mb-2">Imprime o Descarga</h3>
                    <p className="text-sm text-cyan-800">Haz clic en "Imprimir Presupuesto" para generar un documento profesional en 3 páginas listo para firmar.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-cyan-100 border-l-4 border-cyan-600 rounded">
              <p className="text-sm text-cyan-900"><strong>💡 Consejo:</strong> El presupuesto se genera en 3 páginas: Página 1 con datos del profesional y cliente, Página 2 con el detalle de servicios y total, y Página 3 con forma de pago, términos y espacios para firmas.</p>
            </div>
            </div>
          </Card>
        </div>

        {/* Botón de Sugerencias de Mejoras */}
        <div className="mt-8 mb-16 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSecU1AeQMq2PbkoO6K75lSXgGDALW0_14eMPVYkNNdQgLZQuA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageSquare size={20} />
            Sugerencias de mejoras al tarifario
          </a>
        </div>
      </div>

      {/* Componente de Vista Previa de Impresión */}
      <PrintPreviewMultiPage
        logoProfesional={logoProfesional}
        numeroMatricula={numeroMatricula}
        nombreProfesional={nombreProfesional}
        nombreCliente={nombreCliente}
        fechaEmision={fechaEmision}
        fechaValidez={fechaValidez}
        itemsPresupuesto={itemsPresupuesto}
        totalPresupuesto={totalPresupuesto}
        divisa={divisa}
        formaPago={formaPago}
        terminosCondiciones={terminosCondiciones}
      />

      {/* Botón flotante para volver arriba */}
      {mostrarBotonArriba && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50 no-print"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
