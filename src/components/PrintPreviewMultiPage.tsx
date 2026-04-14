import React from 'react';

interface PrintPreviewMultiPageProps {
  logoProfesional: string | null;
  numeroMatricula: string;
  nombreProfesional: string;
  nombreCliente: string;
  fechaEmision: string;
  fechaValidez: string;
  itemsPresupuesto: any[];
  totalPresupuesto: number;
  divisa: string;
  formaPago: string;
  terminosCondiciones: string;
}

const formatearMoneda = (valor: number, decimales: number = 2): string => {
  return valor.toLocaleString('es-AR', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
};

export default function PrintPreviewMultiPage({
  logoProfesional,
  numeroMatricula,
  nombreProfesional,
  nombreCliente,
  fechaEmision,
  fechaValidez,
  itemsPresupuesto,
  totalPresupuesto,
  divisa,
  formaPago,
  terminosCondiciones,
}: PrintPreviewMultiPageProps) {
  return (
    <div className="hidden print:block print-preview-container w-full bg-white">
      {/* PAGE 1 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            {logoProfesional && (
              <div className="print-logo-container">
                <img src={logoProfesional} alt="Logo" className="print-logo" />
              </div>
            )}
            <div className="print-title-section">
              <h1 className="print-title">PRESUPUESTO</h1>
              <p className="print-subtitle">Colegio de Diseñadores Gráficos de Misiones</p>
            </div>
          </div>
          <div className="print-info-section">
            <div className="print-info-box">
              <div className="print-info-label">Profesional/Agencia</div>
              <div className="print-info-value">{nombreProfesional || 'No especificado'}</div>
              {numeroMatricula && (
                <>
                  <div className="print-info-label" style={{ marginTop: '5mm' }}>Matrícula</div>
                  <div className="print-info-value">{numeroMatricula}</div>
                </>
              )}
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Cliente/Comitente</div>
              <div className="print-info-value">{nombreCliente || 'No especificado'}</div>
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Fecha de Emisión</div>
              <div className="print-info-value">
                {new Date(fechaEmision).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
            <div className="print-info-box">
              <div className="print-info-label">Válido hasta</div>
              <div className="print-info-value">
                {fechaValidez ? new Date(fechaValidez).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No especificado'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            <div className="print-title-section">
              <h1 className="print-title">DETALLE DE SERVICIOS</h1>
            </div>
          </div>
          <table className="print-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Descripción</th>
                <th style={{ width: '20%' }}>Categoría</th>
                <th style={{ width: '10%' }}>Horas</th>
                <th style={{ width: '15%' }}>Precio/Hora</th>
                <th style={{ width: '15%' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {itemsPresupuesto.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.categoria}</td>
                  <td style={{ textAlign: 'center' }}>{item.horas}</td>
                  <td style={{ textAlign: 'right' }}>${formatearMoneda(item.precioHora, 2)}</td>
                  <td style={{ textAlign: 'right', fontWeight: 'bold' }}>${formatearMoneda(item.subtotal, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="print-total-section">
            <div className="print-total-label">TOTAL DEL PRESUPUESTO</div>
            <div className="print-total-amount">${formatearMoneda(totalPresupuesto, 2)} {divisa}</div>
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div className="print-page">
        <div className="page-content">
          <div className="print-header">
            <div className="print-title-section">
              <h1 className="print-title">CONDICIONES Y FIRMAS</h1>
            </div>
          </div>
          {formaPago && (
            <div style={{ marginBottom: '10mm' }}>
              <div className="print-info-label" style={{ fontSize: '12px', marginBottom: '5mm' }}>Forma de Pago</div>
              <div className="print-text-section">{formaPago}</div>
            </div>
          )}
          {terminosCondiciones && (
            <div style={{ marginBottom: '10mm' }}>
              <div className="print-info-label" style={{ fontSize: '12px', marginBottom: '5mm' }}>Términos y Condiciones</div>
              <div className="print-text-section">{terminosCondiciones}</div>
            </div>
          )}
          <div className="print-signatures">
            <div className="print-signature-box">
              <div className="print-signature-label">Firma del Profesional</div>
              <div className="print-signature-name">{nombreProfesional}</div>
            </div>
            <div className="print-signature-box">
              <div className="print-signature-label">Firma del Cliente</div>
              <div className="print-signature-name">{nombreCliente}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
